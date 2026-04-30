import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Hero from '@/components/Hero';
import MarketsMapClient from '@/components/markets/MarketsMapClient';
import { supabase } from '@/lib/supabase';
import type { Market, RatingSummaries } from '@/components/markets/marketsData';

const BASE_URL = 'https://www.french-countryside-living.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const title = isEn
    ? 'Provençal Markets Map — Find Weekly Markets in Provence'
    : 'Carte des Marchés de Provence — Marchés Hebdomadaires';

  const description = isEn
    ? 'Interactive map of 68+ weekly markets across all of Provence — Bouches-du-Rhône, Var, Vaucluse, and Alpes-de-Haute-Provence. Filter by day, market type, and department. Direct links to each village mairie for live cancellation information.'
    : 'Carte interactive de plus de 68 marchés hebdomadaires en Provence — Bouches-du-Rhône, Var, Vaucluse et Alpes-de-Haute-Provence. Filtrez par jour, type et département. Liens directs vers chaque mairie.';

  const canonical = isEn
    ? `${BASE_URL}/provence/markets`
    : `${BASE_URL}/fr/provence/markets`;

  return {
    title,
    description,
    keywords: isEn
      ? [
          'Provence markets', 'Provençal markets', 'markets in Provence', 'weekly markets Provence',
          'marché Provence', 'Provence market map', 'Apt Saturday market', "L'Isle-sur-la-Sorgue market",
          'Saint-Rémy-de-Provence market', 'Arles market', 'Forcalquier market', 'Vaucluse markets',
          'Var markets', 'Alpes-de-Haute-Provence markets', 'brocante Provence', 'antique markets Provence',
          'food markets south of France', 'Luberon markets', 'Alpilles markets',
        ]
      : [
          'marchés Provence', 'marchés hebdomadaires Provence', 'carte marchés Provence',
          'marché Apt', 'marché Isle-sur-la-Sorgue', 'marché Saint-Rémy-de-Provence',
          'brocante Provence', 'marchés Vaucluse', 'marchés Var',
        ],
    alternates: {
      canonical,
      languages: {
        'en': `${BASE_URL}/provence/markets`,
        'fr': `${BASE_URL}/fr/provence/markets`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'French Countryside Living',
      images: [
        {
          url: `${BASE_URL}/images/market.png`,
          width: 1200,
          height: 630,
          alt: 'Interactive map of weekly markets across Provence, France',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/market.png`],
    },
  };
}

async function fetchRatings(): Promise<RatingSummaries> {
  try {
    const { data, error } = await supabase
      .from('market_ratings')
      .select('market_id, rating');

    if (error || !data) return {};

    const summaries: RatingSummaries = {};
    for (const row of data) {
      if (!summaries[row.market_id]) summaries[row.market_id] = { avg: 0, count: 0 };
      summaries[row.market_id].count += 1;
      summaries[row.market_id].avg += row.rating;
    }
    for (const id of Object.keys(summaries)) {
      summaries[id].avg = Math.round((summaries[id].avg / summaries[id].count) * 10) / 10;
    }
    return summaries;
  } catch {
    return {};
  }
}

async function fetchMarkets(): Promise<Market[]> {
  try {
    const { data, error } = await supabase
      .from('markets')
      .select('*')
      .eq('confirmed', true)
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

function buildJsonLd(markets: Market[], locale: string) {
  const isEn = locale === 'en';
  const pageUrl = isEn
    ? `${BASE_URL}/provence/markets`
    : `${BASE_URL}/fr/provence/markets`;

  // BreadcrumbList
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'French Countryside Living', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Provence', item: `${BASE_URL}/provence` },
      {
        '@type': 'ListItem',
        position: 3,
        name: isEn ? 'Markets Map' : 'Carte des Marchés',
        item: pageUrl,
      },
    ],
  };

  // Dataset describing the collection
  const dataset = {
    '@type': 'Dataset',
    name: isEn
      ? 'Weekly Markets of Provence — Interactive Map'
      : 'Marchés Hebdomadaires de Provence — Carte Interactive',
    description: isEn
      ? 'A curated dataset of 68+ weekly recurring markets across the four departments of Provence, France: Bouches-du-Rhône, Var, Vaucluse, and Alpes-de-Haute-Provence.'
      : 'Base de données de plus de 68 marchés hebdomadaires dans les quatre départements de Provence : Bouches-du-Rhône, Var, Vaucluse et Alpes-de-Haute-Provence.',
    url: pageUrl,
    spatialCoverage: {
      '@type': 'Place',
      name: 'Provence, France',
      geo: {
        '@type': 'GeoShape',
        box: '43.1 4.6 44.4 6.8',
      },
    },
    includedInDataCatalog: {
      '@type': 'DataCatalog',
      name: 'French Countryside Living',
      url: BASE_URL,
    },
  };

  // ItemList of individual markets (top ~20 to keep payload reasonable)
  const itemList = {
    '@type': 'ItemList',
    name: isEn ? 'Provençal Markets' : 'Marchés de Provence',
    url: pageUrl,
    numberOfItems: markets.length,
    itemListElement: markets.slice(0, 20).map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'LocalBusiness',
        name: m.name,
        description: m.notes ?? undefined,
        address: {
          '@type': 'PostalAddress',
          addressLocality: m.village,
          addressRegion: m.department,
          addressCountry: 'FR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: m.lat,
          longitude: m.lng,
        },
        url: m.mairie_url ?? undefined,
        openingHours: `We ${m.day_of_week.slice(0, 2).toUpperCase()}`,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, dataset, itemList],
  };
}

export default async function MarketsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('MarketsPage');
  const [markets, ratings] = await Promise.all([fetchMarkets(), fetchRatings()]);
  const jsonLd = buildJsonLd(markets, locale);

  return (
    <>
      {/* Structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/market.png"
        imageAlt="A busy Provençal market with stalls selling garlic, produce, and local goods under plane trees"
        height="medium"
        overlay="medium"
      />

      {/* Breadcrumb bar */}
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
        <span className="text-parchment/20 text-xs">·</span>
        <Link
          href={`/${locale}/provence/markets/submit`}
          className="inline-flex items-center gap-1.5 bg-amber hover:bg-amber/90 text-charcoal text-xs font-heading font-semibold px-3 py-1.5 rounded transition-colors"
        >
          {t('submitMarket')}
        </Link>
      </div>

      {/* Map */}
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
        <MarketsMapClient markets={markets} ratings={ratings} />
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
