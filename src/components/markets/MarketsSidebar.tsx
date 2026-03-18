'use client';

import { useTranslations } from 'next-intl';
import type { Market } from './marketsData';
import { MARKET_TYPE_COLORS, type MarketTypeKey } from './marketsData';

interface Props {
  markets: Market[];
  selectedId: string | null;
  onSelect: (market: Market) => void;
}

const SEASONALITY_DOTS: Record<string, string> = {
  year_round: 'bg-olive',
  summer: 'bg-amber',
  seasonal: 'bg-terracotta',
};

const TYPE_LABEL_KEYS: Record<string, string> = {
  food: 'typeFood',
  brocante: 'typeBrocante',
  crafts: 'typeCrafts',
  mixed: 'typeMixed',
};

export default function MarketsSidebar({ markets, selectedId, onSelect }: Props) {
  const t = useTranslations('MarketsPage');

  if (markets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <span className="text-3xl mb-3">🧺</span>
        <p className="font-body text-sm text-charcoal/50">{t('noResults')}</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-parchment">
      {markets.map((market) => {
        const isSelected = market.id === selectedId;
        const primaryType = market.market_type[0] ?? 'mixed';
        const color = MARKET_TYPE_COLORS[primaryType as MarketTypeKey] ?? MARKET_TYPE_COLORS.mixed;

        return (
          <li key={market.id}>
            <button
              onClick={() => onSelect(market)}
              className={`w-full text-left px-4 py-3 transition-colors hover:bg-parchment/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                isSelected ? 'bg-parchment border-l-2 border-olive' : ''
              }`}
            >
              {/* Market name + day */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-heading font-semibold text-sm text-charcoal leading-snug">
                  {market.village}
                </span>
                <span className="text-xs font-body text-charcoal/50 shrink-0 mt-0.5">
                  {t(`${market.day_of_week.toLowerCase()}Short` as any) || market.day_of_week.slice(0, 3)}
                </span>
              </div>

              {/* Full name */}
              <p className="text-xs font-body text-charcoal/55 mb-1.5 leading-tight">
                {market.name !== `Marché de ${market.village}` &&
                market.name !== `Grand Marché de ${market.village}`
                  ? market.name
                  : market.department}
              </p>

              {/* Type chips + seasonality dot */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {market.market_type.slice(0, 2).map((type) => {
                  const c = MARKET_TYPE_COLORS[type as MarketTypeKey] ?? color;
                  return (
                    <span
                      key={type}
                      className="text-[10px] px-1.5 py-0.5 rounded-sm text-white font-medium leading-none"
                      style={{ backgroundColor: c }}
                    >
                      {t(TYPE_LABEL_KEYS[type] as any) || type}
                    </span>
                  );
                })}
                <span
                  className={`w-2 h-2 rounded-full ml-auto shrink-0 ${
                    SEASONALITY_DOTS[market.seasonality] ?? 'bg-charcoal/30'
                  }`}
                  title={t(`seasonality${market.seasonality.charAt(0).toUpperCase() + market.seasonality.slice(1).replace('_r', 'R')}` as any)}
                />
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
