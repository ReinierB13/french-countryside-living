'use client';

import dynamic from 'next/dynamic';
import type { Market, RatingSummaries } from './marketsData';

const MarketsMap = dynamic(() => import('./MarketsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100dvh-56px)] bg-parchment animate-pulse flex items-center justify-center">
      <span className="font-body text-charcoal/40 text-sm">Loading map…</span>
    </div>
  ),
});

export default function MarketsMapClient({ markets, ratings }: { markets: Market[]; ratings: RatingSummaries }) {
  return <MarketsMap markets={markets} ratings={ratings} />;
}
