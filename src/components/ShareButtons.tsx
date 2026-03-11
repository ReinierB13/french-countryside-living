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
    whatsapp: string;
    facebook: string;
  };
  /** Compact mode: icon-only buttons, no heading, no top border - for use at the top of a page */
  compact?: boolean;
}

export default function ShareButtons({ title, path, labels, compact = false }: Props) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => `${window.location.origin}${path}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleWhatsApp = () => {
    const url = encodeURIComponent(getUrl());
    const text = encodeURIComponent(`${title} `);
    window.open(`https://wa.me/?text=${text}${url}`, '_blank', 'noopener');
  };

  const handleFacebook = () => {
    const url = encodeURIComponent(getUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,width=600,height=400');
  };

  const handleX = () => {
    const url = encodeURIComponent(getUrl());
    const text = encodeURIComponent(title);
    window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,width=600,height=400');
  };

  const handleEmail = () => {
    const url = getUrl();
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${title}\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const btnBase = 'inline-flex items-center justify-center active:scale-95 transition-all rounded-sm';
  const btnSize = compact ? 'w-10 h-10' : 'gap-2 px-5 py-3 font-body text-sm font-medium';

  return (
    <div className={compact ? 'flex flex-wrap gap-2' : 'mt-8 pt-6 border-t border-charcoal/10'}>
      {!compact && (
        <span className="font-heading text-sm font-semibold text-charcoal/60 uppercase tracking-wide block mb-4">
          {labels.share}
        </span>
      )}

      <div className="flex flex-wrap gap-2">
        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          aria-label={labels.whatsapp}
          className={`${btnBase} ${btnSize} bg-[#25D366] text-white hover:bg-[#1ebe5d]`}
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {!compact && <span className="hidden sm:inline">{labels.whatsapp}</span>}
        </button>

        {/* Facebook */}
        <button
          onClick={handleFacebook}
          aria-label={labels.facebook}
          className={`${btnBase} ${btnSize} bg-[#1877F2] text-white hover:bg-[#1464d3]`}
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          {!compact && <span className="hidden sm:inline">{labels.facebook}</span>}
        </button>

        {/* X / Twitter */}
        <button
          onClick={handleX}
          aria-label="X"
          className={`${btnBase} ${btnSize} bg-charcoal text-white hover:bg-charcoal/80`}
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {!compact && <span className="hidden sm:inline">X</span>}
        </button>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          aria-label={labels.copyLink}
          className={`${btnBase} ${btnSize} border border-charcoal/20 text-charcoal/70 hover:border-terracotta hover:text-terracotta`}
        >
          {copied ? (
            <svg className="w-5 h-5 text-olive flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          )}
          {!compact && <span>{copied ? labels.copied : labels.copyLink}</span>}
        </button>

        {/* Email */}
        <button
          onClick={handleEmail}
          aria-label={labels.email}
          className={`${btnBase} ${btnSize} border border-charcoal/20 text-charcoal/70 hover:border-terracotta hover:text-terracotta`}
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {!compact && <span className="hidden sm:inline">{labels.email}</span>}
        </button>
      </div>
    </div>
  );
}
