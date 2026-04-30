'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import type { Market } from './marketsData';
import { MARKET_TYPE_COLORS, type MarketTypeKey } from './marketsData';

interface Props {
  market: Market;
}

const SEASONALITY_COLORS: Record<string, string> = {
  year_round: 'bg-olive/15 text-olive',
  summer: 'bg-amber/20 text-amber-dark',
  seasonal: 'bg-terracotta/15 text-terracotta-dark',
};

export default function MarketPopup({ market }: Props) {
  const t = useTranslations('MarketsPage');
  const locale = useLocale();
  const detailHref = locale === 'fr'
    ? `/fr/provence/markets/${market.id}`
    : `/provence/markets/${market.id}`;

  const seasonalityKey =
    market.seasonality === 'year_round'
      ? 'seasonalityYearRound'
      : market.seasonality === 'summer'
      ? 'seasonalitySummer'
      : 'seasonalitySeasonal';

  return (
    <div className="font-body text-charcoal min-w-[220px] max-w-[280px]">
      {/* Header */}
      <div className="mb-2">
        <h3 className="font-heading font-bold text-base text-charcoal leading-tight">
          {market.name}
        </h3>
        <p className="text-sm text-charcoal/60 mt-0.5">
          {market.village}
          {market.postcode && (
            <span className="text-charcoal/40"> {market.postcode}</span>
          )}
          {market.department !== market.village && (
            <span className="text-charcoal/40"> · {market.department}</span>
          )}
        </p>
      </div>

      {/* Day + Seasonality */}
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        <span className="inline-flex items-center gap-1 bg-charcoal/8 text-charcoal text-xs font-medium px-2 py-0.5 rounded-sm">
          {market.day_of_week}
        </span>
        <span
          className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-sm ${
            SEASONALITY_COLORS[market.seasonality] ?? 'bg-charcoal/10 text-charcoal'
          }`}
        >
          {t(seasonalityKey)}
        </span>
      </div>

      {/* Type tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {market.market_type.map((type) => {
          const color =
            MARKET_TYPE_COLORS[type as MarketTypeKey] ?? MARKET_TYPE_COLORS.mixed;
          const labelKey =
            type === 'food'
              ? 'typeFood'
              : type === 'brocante'
              ? 'typeBrocante'
              : type === 'crafts'
              ? 'typeCrafts'
              : 'typeMixed';
          return (
            <span
              key={type}
              className="text-xs px-2 py-0.5 rounded-sm text-white font-medium"
              style={{ backgroundColor: color }}
            >
              {t(labelKey)}
            </span>
          );
        })}
      </div>

      {/* Notes */}
      {market.notes && (
        <p className="text-xs text-charcoal/65 leading-relaxed mb-3 border-l-2 border-parchment pl-2">
          {market.notes.length > 160 ? market.notes.slice(0, 157) + '…' : market.notes}
        </p>
      )}

      {/* Mairie link */}
      {market.mairie_url && (
        <a
          href={market.mairie_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-charcoal/8 text-charcoal text-xs font-medium py-1.5 px-3 rounded-sm hover:bg-charcoal/15 transition-colors mb-1.5"
        >
          {t('checkMairie')} →
        </a>
      )}

      {/* Phone */}
      {market.mairie_phone && (
        <p className="text-xs text-charcoal/50 text-center mb-1.5">
          {t('mairiePhone')}: {market.mairie_phone}
        </p>
      )}

      {/* Reviews link */}
      <Link
        href={detailHref}
        className="block w-full text-center bg-terracotta text-white text-xs font-medium py-1.5 px-3 rounded-sm hover:bg-terracotta/85 transition-colors mt-1"
      >
        Reviews &amp; comments →
      </Link>
    </div>
  );
}
