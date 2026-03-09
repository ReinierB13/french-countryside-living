'use client';

import { useState, useEffect } from 'react';
import type { Comment } from '@/lib/supabase';

interface Props {
  contentType: 'article' | 'recipe';
  contentSlug: string;
}

export default function Comments({ contentType, contentSlug }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // invisible to humans, filled by bots
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/comments?slug=${contentSlug}&type=${contentType}`)
      .then((r) => r.json())
      .then((data) => {
        setComments(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [contentSlug, contentType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, honeypot, content_type: contentType, content_slug: contentSlug }),
    });

    setSubmitting(false);

    if (res.ok) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="mt-12 pt-8 border-t border-charcoal/10">
      <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">Comments</h2>

      {/* Existing comments */}
      {loading ? (
        <p className="font-body text-sm text-charcoal/50">Loading comments...</p>
      ) : comments.length > 0 ? (
        <div className="space-y-6 mb-10">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-parchment border border-charcoal/10 p-5">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="font-heading font-semibold text-charcoal text-sm">{comment.name}</span>
                <span className="font-body text-xs text-charcoal/40 shrink-0">{formatDate(comment.created_at)}</span>
              </div>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed whitespace-pre-wrap">{comment.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-body text-sm text-charcoal/50 mb-10">
          No comments yet — be the first to share your thoughts.
        </p>
      )}

      {/* Comment form */}
      {submitted ? (
        <div className="bg-olive/10 border border-olive/20 p-5">
          <p className="font-heading font-semibold text-olive mb-1">Thank you for your comment!</p>
          <p className="font-body text-sm text-charcoal/70">
            It will appear here once approved — usually within a day or two.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-charcoal">Leave a comment</h3>

          {/* Honeypot — hidden from humans, bots fill it in */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            <label htmlFor="comment-website">Website (leave blank)</label>
            <input
              id="comment-website"
              name="website"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-sm font-medium text-charcoal/70 mb-1" htmlFor="comment-name">
                Name <span className="text-terracotta">*</span>
              </label>
              <input
                id="comment-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={80}
                className="w-full border border-charcoal/20 bg-white font-body text-sm text-charcoal px-4 py-2.5 focus:outline-none focus:border-olive transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-charcoal/70 mb-1" htmlFor="comment-email">
                Email <span className="text-terracotta">*</span>
                <span className="text-charcoal/40 font-normal ml-1">(not shown publicly)</span>
              </label>
              <input
                id="comment-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-charcoal/20 bg-white font-body text-sm text-charcoal px-4 py-2.5 focus:outline-none focus:border-olive transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-charcoal/70 mb-1" htmlFor="comment-message">
              Comment <span className="text-terracotta">*</span>
            </label>
            <textarea
              id="comment-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={1000}
              rows={4}
              className="w-full border border-charcoal/20 bg-white font-body text-sm text-charcoal px-4 py-2.5 focus:outline-none focus:border-olive transition-colors resize-none"
              placeholder="Share your thoughts..."
            />
            <p className="font-body text-xs text-charcoal/40 mt-1 text-right">{message.length}/1000</p>
          </div>

          {error && (
            <p className="font-body text-sm text-terracotta">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-olive text-white font-body text-sm font-medium px-6 py-3 hover:bg-olive/85 active:scale-95 transition-all disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Post comment'}
          </button>

          <p className="font-body text-xs text-charcoal/40">
            Comments are reviewed before appearing on the site.
          </p>
        </form>
      )}
    </div>
  );
}
