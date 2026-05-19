'use client';

import dynamic from 'next/dynamic';
import type { LavenderField } from './lavenderData';

const LavenderMap = dynamic(() => import('./LavenderMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100dvh-56px)] bg-parchment animate-pulse flex items-center justify-center">
      <span className="font-body text-charcoal/40 text-sm">Loading map…</span>
    </div>
  ),
});

export default function LavenderMapClient({ fields }: { fields: LavenderField[] }) {
  return <LavenderMap fields={fields} />;
}
