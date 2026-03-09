'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { MarcelType } from '@/types';

interface MarcelProps {
  type?: MarcelType;
  text: string;
  className?: string;
}

const marcelImages: Record<MarcelType, string> = {
  default: '/images/marcel-default.png',
  cooking: '/images/marcel-cooking.png',
  hunter: '/images/marcel-hunter.png',
  gardener: '/images/marcel-gardener.png',
  rose: '/images/marcel-rose.png',
  petanque: '/images/marcel-petanque.png',
};

export default function Marcel({ type = 'default', text, className = '' }: MarcelProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const src = marcelImages[type];

  return (
    <>
      <div
        className={`flex items-center gap-8 bg-amber/10 border-l-4 border-terracotta rounded-r-xl p-8 my-10 shadow-md ${className}`}
      >
        <button
          onClick={() => setLightboxOpen(true)}
          className="flex-shrink-0 w-40 h-40 relative cursor-zoom-in hover:scale-105 transition-transform duration-200"
          aria-label="View Marcel full size"
          title="Click to enlarge"
        >
          <Image
            src={src}
            alt="Marcel the Frog"
            fill
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = marcelImages.default;
            }}
          />
        </button>
        <div className="flex-1 min-w-0 py-2">
          <p className="text-sm font-heading font-bold text-terracotta uppercase tracking-widest mb-3">
            🐸 Marcel says:
          </p>
          <p className="font-body text-charcoal text-base italic leading-relaxed">{text}</p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative w-80 h-80 sm:w-[480px] sm:h-[480px]">
            <Image
              src={src}
              alt="Marcel the Frog"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <button
            className="absolute top-4 right-5 text-white text-3xl font-bold leading-none hover:text-amber transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
