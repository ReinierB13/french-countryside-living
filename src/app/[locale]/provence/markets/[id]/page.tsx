import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import type { Market } from '@/components/markets/marketsData';
import { MARKET_TYPE_COLORS, type MarketTypeKey } from '@/components/markets/marketsData';
import MarketRating from '@/components/markets/MarketRating';
import Comments from '@/components/Comments';

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

async function fetchMarket(id: string): Promise<Market | null> {
  const { data, error } = await getSupabase()
    .from('markets')
    .select('*')
    .eq('id', id)
    .eq('confirmed', true)
    .single();

  if (error || !data) return null;
  return data as Market;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const market = await fetchMarket(id);
  if (!market) return { title: 'Market not found' };
  return {
    title: `${market.name} — ${market.village}`,
    description: market.notes ?? `${market.day_of_week} market in ${market.village}, ${market.department}.`,
  };
}

const SEASONALITY_LABELS: Record<string, string> = {
  year_round: 'Year-round',
  summer: 'Summer',
  seasonal: 'Seasonal',
};

const TYPE_LABELS: Record<string, string> = {
  food: 'Food & Produce',
  brocante: 'Brocante & Antiques',
  crafts: 'Crafts & Artisan',
  mixed: 'Mixed',
};

export default async function MarketDetailPage({ params }: Props) {
  const { locale, id } = await params;
  const market = await fetchMarket(id);
  if (!market) notFound();

  const backHref = locale === 'fr' ? '/fr/provence/markets' : '/provence/markets';

  return (
    <>
      {/* Header */}
      <div className="bg-charcoal text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href={backHref}
            className="inline-block text-parchment/50 hover:text-parchment text-xs font-body transition-colors mb-5"
          >
            ← Back to Markets Map
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">{market.name}</h1>
          <p className="font-body text-parchment/70 text-lg">
            {market.village}
            {market.postcode && <span> {market.postcode}</span>}
            {market.department !== market.village && (
              <span className="text-parchment/40"> · {market.department}</span>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="bg-parchment p-4">
            <p className="font-heading text-xs uppercase tracking-wider text-charcoal/50 mb-1">Day</p>
            <p className="font-heading font-semibold text-charcoal">{market.day_of_week}</p>
          </div>
          <div className="bg-parchment p-4">
            <p className="font-heading text-xs uppercase tracking-wider text-charcoal/50 mb-1">Season</p>
            <p className="font-heading font-semibold text-charcoal">
              {SEASONALITY_LABELS[market.seasonality] ?? market.seasonality}
            </p>
          </div>
          <div className="bg-parchment p-4 col-span-2">
            <p className="font-heading text-xs uppercase tracking-wider text-charcoal/50 mb-2">Type</p>
            <div className="flex flex-wrap gap-1.5">
              {market.market_type.map((type) => (
                <span
                  key={type}
                  className="text-xs px-2 py-0.5 rounded-sm text-white font-medium"
                  style={{ backgroundColor: MARKET_TYPE_COLORS[type as MarketTypeKey] ?? MARKET_TYPE_COLORS.mixed }}
                >
                  {TYPE_LABELS[type] ?? type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        {market.notes && (
          <div className="mb-10 pl-4 border-l-2 border-terracotta/30">
            <p className="font-body text-charcoal/80 leading-relaxed">{market.notes}</p>
          </div>
        )}

        {/* Mairie links */}
        {(market.mairie_url || market.mairie_phone) && (
          <div className="mb-10 flex flex-wrap gap-4 items-center">
            {market.mairie_url && (
              <a
                href={market.mairie_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal text-parchment font-body text-sm px-5 py-2.5 hover:bg-charcoal/85 transition-colors"
              >
                Check mairie for cancellations →
              </a>
            )}
            {market.mairie_phone && (
              <p className="font-body text-sm text-charcoal/60">
                Mairie: {market.mairie_phone}
              </p>
            )}
          </div>
        )}

        {/* Ratings */}
        <MarketRating marketId={market.id} />

        {/* Comments */}
        <Comments contentType="market" contentSlug={market.id} />
      </div>
    </>
  );
}
