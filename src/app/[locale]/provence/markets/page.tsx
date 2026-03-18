import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { supabase } from '@/lib/supabase';
import type { Market } from '@/components/markets/marketsData';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Provençal Markets Map',
    description:
      'Find weekly markets across all of Provence — filtered by day, type, and department, with direct links to each village mairie.',
  };
}

// Dynamically import the map to avoid SSR issues with Leaflet
const MarketsMap = dynamic(() => import('@/components/markets/MarketsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100dvh-56px)] bg-parchment animate-pulse flex items-center justify-center">
      <span className="font-body text-charcoal/40 text-sm">Loading map…</span>
    </div>
  ),
});

async function fetchMarkets(): Promise<Market[]> {
  try {
    const { data, error } = await supabase
      .from('markets')
      .select('*')
      .order('department', { ascending: true })
      .order('village', { ascending: true });

    if (error) {
      console.error('Error fetching markets:', error.message);
      return [];
    }

    return (data ?? []) as Market[];
  } catch (err) {
    console.error('Failed to fetch markets:', err);
    return [];
  }
}

export default async function MarketsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('MarketsPage');
  const markets = await fetchMarkets();

  return (
    <>
      {/* Hero */}
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/provence-markets-hero.jpg"
        imageAlt="A busy Provençal market with stalls selling garlic, produce, and local goods"
        height="medium"
        overlay="medium"
      />

      {/* Breadcrumb */}
      <div className="bg-charcoal text-parchment px-4 sm:px-6 py-2.5 flex items-center gap-3">
        <Link
          href={`/${locale}/provence`}
          className="text-parchment/50 hover:text-parchment text-xs font-body transition-colors"
        >
          {t('backToProvence')}
        </Link>
        {markets.length > 0 && (
          <>
            <span className="text-parchment/20 text-xs">·</span>
            <span className="font-body text-xs text-parchment/35">{markets.length} marchés</span>
          </>
        )}
      </div>

      {/* Map — full height below the header */}
      {markets.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-parchment">
          <span className="text-4xl mb-4">🗺️</span>
          <h2 className="font-heading text-xl font-bold text-charcoal mb-2">
            {t('noData')}
          </h2>
          <p className="font-body text-sm text-charcoal/60 max-w-sm">
            The markets database is being set up. Please check back soon, or{' '}
            <Link href={`/${locale}/contact`} className="text-terracotta hover:underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      ) : (
        <MarketsMap markets={markets} />
      )}

      {/* Disclaimer */}
      <div className="bg-amber/10 border-t border-amber/30 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-heading font-semibold text-charcoal text-sm mb-1">
            {t('disclaimerTitle')}
          </p>
          <p className="font-body text-xs text-charcoal/65 leading-relaxed">
            {t('disclaimerText')}
          </p>
        </div>
      </div>
    </>
  );
}
