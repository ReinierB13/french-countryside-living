'use client';

import { useState } from 'react';

interface Props {
  title: string;
  path: string;
  labels: {
    share: string;
    copyLink: string;
    copied: string;
    email: string;
  };
}

export default function ShareButtons({ title, path, labels }: Props) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => `${window.location.origin}${path}`;

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title, url: getUrl() });
    } catch {
      // user cancelled or not supported
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleEmail = () => {
    const url = getUrl();
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${title}\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-charcoal/10">
      <span className="font-heading text-sm font-semibold text-charcoal/60 uppercase tracking-wide mr-1">
        {labels.share}
      </span>

      {canNativeShare && (
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 bg-terracotta text-white font-body text-sm px-4 py-2 rounded-sm hover:bg-terracotta/85 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {labels.share}
        </button>
      )}

      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal/70 font-body text-sm px-4 py-2 rounded-sm hover:border-terracotta hover:text-terracotta transition-colors"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
        {copied ? labels.copied : labels.copyLink}
      </button>

      <button
        onClick={handleEmail}
        className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal/70 font-body text-sm px-4 py-2 rounded-sm hover:border-terracotta hover:text-terracotta transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {labels.email}
      </button>
    </div>
  );
}
