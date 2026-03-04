'use client';

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
  return (
    <div
      className={`flex items-start gap-4 bg-amber/10 border-l-4 border-terracotta rounded-r-lg p-5 my-8 shadow-sm ${className}`}
    >
      <div className="flex-shrink-0 w-16 h-16 relative">
        <Image
          src={marcelImages[type]}
          alt="Marcel the Frog"
          fill
          className="object-contain"
          onError={(e) => {
            // Fallback to default if image not found
            (e.target as HTMLImageElement).src = marcelImages.default;
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-heading font-bold text-terracotta uppercase tracking-widest mb-2">
          🐸 Marcel says:
        </p>
        <p className="font-body text-charcoal italic leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
