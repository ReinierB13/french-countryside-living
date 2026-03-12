'use client';

import { useState, useEffect } from 'react';

interface Props {
  contentType: 'article' | 'recipe';
  contentSlug: string;
}

function getFingerprint(): string {
  const key = 'fcl_fp';
  let fp = localStorage.getItem(key);
  if (!fp) {
    fp = crypto.randomUUID();
    localStorage.setItem(key, fp);
  }
  return fp;
}

function getLikedKey(type: string, slug: string) {
  return `fcl_liked_${type}_${slug}`;
}

export default function LikeButton({ contentType, contentSlug }: Props) {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load initial count
    fetch(`/api/likes?slug=${contentSlug}&type=${contentType}`)
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(0));

    // Check if already liked in this browser
    const alreadyLiked = localStorage.getItem(getLikedKey(contentType, contentSlug)) === '1';
    setLiked(alreadyLiked);
  }, [contentType, contentSlug]);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    const fingerprint = getFingerprint();
    const action = liked ? 'unlike' : 'like';

    try {
      const res = await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: contentSlug, type: contentType, fingerprint, action }),
      });
      const data = await res.json();
      setCount(data.count ?? 0);

      if (action === 'like') {
        localStorage.setItem(getLikedKey(contentType, contentSlug), '1');
        setLiked(true);
      } else {
        localStorage.removeItem(getLikedKey(contentType, contentSlug));
        setLiked(false);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleClick}
        disabled={loading}
        aria-label={liked ? 'Unlike this' : 'Like this'}
        className={`flex items-center gap-2 px-4 py-2 border transition-all duration-200 font-body text-sm font-medium active:scale-95 disabled:opacity-60 ${
          liked
            ? 'bg-terracotta border-terracotta text-white hover:bg-terracotta/85'
            : 'bg-white border-charcoal/20 text-charcoal/70 hover:border-terracotta hover:text-terracotta'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 shrink-0"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {liked ? 'Liked' : 'Like this'}
      </button>

      {count !== null && count > 0 && (
        <span className="font-body text-sm text-charcoal/50">
          {count} {count === 1 ? 'person' : 'people'} liked this
        </span>
      )}
    </div>
  );
}
