'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslations } from 'next-intl';

import type { Market, RatingSummaries } from './marketsData';
import {
  DEFAULT_FILTERS,
  MARKET_TYPE_COLORS,
  type ActiveFilters,
  type MarketTypeKey,
  filterMarkets,
  getPrimaryType,
  hasActiveFilters,
} from './marketsData';
import MarketFilters from './MarketFilters';
import MarketsSidebar from './MarketsSidebar';
import MarketPopup from './MarketPopup';

// ---------------------------------------------------------------------------
// Map pin SVG icons
// ---------------------------------------------------------------------------
function createPinIcon(types: string[], selected = false) {
  const color = MARKET_TYPE_COLORS[getPrimaryType(types) as MarketTypeKey];
  if (selected) {
    return L.divIcon({
      html: `<svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0C6.268 0 0 6.268 0 14c0 9.8 14 24 14 24s14-14.2 14-24C28 6.268 21.732 0 14 0z" fill="${color}" stroke="white" stroke-width="1.5"/>
        <circle cx="14" cy="14" r="5.5" fill="white" opacity="0.9"/>
      </svg>`,
      className: '',
      iconSize: [28, 38],
      iconAnchor: [14, 38],
      popupAnchor: [0, -40],
    });
  }
  return L.divIcon({
    html: `<svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C4.925 0 0 4.925 0 11c0 7.732 11 19 11 19s11-11.268 11-19C22 4.925 17.075 0 11 0z" fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="11" cy="11" r="4.5" fill="white" opacity="0.9"/>
    </svg>`,
    className: '',
    iconSize: [22, 30],
    iconAnchor: [11, 30],
    popupAnchor: [0, -32],
  });
}

// ---------------------------------------------------------------------------
// MapController — drives flyTo from outside the MapContainer
// ---------------------------------------------------------------------------
function MapController({ target }: { target: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo(target, Math.max(map.getZoom(), 12), { animate: true, duration: 0.8 });
    }
  }, [target, map]);
  return null;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
interface Props {
  markets: Market[];
  ratings: RatingSummaries;
}

export default function MarketsMap({ markets, ratings }: Props) {
  const t = useTranslations('MarketsPage');

  const [filters, setFilters] = useState<ActiveFilters>(DEFAULT_FILTERS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => filterMarkets(markets, filters), [markets, filters]);

  const handleSelectMarket = useCallback((market: Market) => {
    setSelectedId(market.id);
    setFlyTarget([market.lat, market.lng]);
    setSidebarOpen(false);
  }, []);

  const handleFiltersChange = useCallback((next: ActiveFilters) => {
    setFilters(next);
    setSelectedId(null);
    setFlyTarget(null);
  }, []);

  const activeFilterCount =
    filters.days.length +
    filters.types.length +
    filters.departments.length +
    (filters.seasonality !== 'all' ? 1 : 0);

  return (
    <div className="relative flex flex-col lg:flex-row h-[calc(100dvh-56px)] overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* SIDEBAR — desktop: left column; mobile: bottom sheet overlay        */}
      {/* ------------------------------------------------------------------ */}
      <aside
        className={[
          'z-[1100] bg-white flex flex-col',
          // Desktop
          'lg:w-96 lg:flex-none lg:relative lg:translate-y-0 lg:h-full lg:border-r lg:border-parchment lg:shadow-none',
          // Mobile
          'fixed bottom-0 left-0 right-0 max-h-[78vh] rounded-t-2xl shadow-2xl',
          'transition-transform duration-300 ease-out',
          sidebarOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0',
        ].join(' ')}
      >
        {/* Mobile drag handle */}
        <div className="lg:hidden flex items-center justify-between px-4 pt-3 pb-1">
          <div className="w-10 h-1 bg-charcoal/20 rounded-full mx-auto" />
        </div>

        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-parchment shrink-0">
          <h2 className="font-heading font-bold text-charcoal text-base">
            {t('sidebarTitle')}
            {filtered.length > 0 && (
              <span className="ml-2 font-body font-normal text-sm text-charcoal/40">
                ({filtered.length})
              </span>
            )}
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-charcoal/40 hover:text-charcoal p-1"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Filters */}
        <div className="shrink-0 overflow-y-auto">
          <MarketFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            totalCount={markets.length}
            filteredCount={filtered.length}
          />
        </div>

        {/* Market list */}
        <div className="flex-1 overflow-y-auto">
          <MarketsSidebar
            markets={filtered}
            selectedId={selectedId}
            onSelect={handleSelectMarket}
          />
        </div>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* MAP                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex-1 relative h-full">
        <MapContainer
          center={[43.8, 5.5]}
          zoom={9}
          className="w-full h-full"
          zoomControl={true}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            maxZoom={20}
          />
          <MapController target={flyTarget} />

          {markets.map((market) => {
            const isVisible = filtered.some((m) => m.id === market.id);
            const isSelected = market.id === selectedId;

            if (!isVisible && hasActiveFilters(filters)) return null;

            return (
              <Marker
                key={market.id}
                position={[market.lat, market.lng]}
                icon={createPinIcon(market.market_type, isSelected)}
                opacity={isVisible ? 1 : 0.2}
                eventHandlers={{
                  click: () => {
                    setSelectedId(market.id);
                    setFlyTarget([market.lat, market.lng]);
                  },
                }}
              >
                <Popup minWidth={220}>
                  <MarketPopup market={market} rating={ratings[market.id]} />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Mobile bottom toggle button */}
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className={[
            'lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000]',
            'flex items-center gap-2 shadow-lg px-4 py-2.5 rounded-full',
            'font-body text-sm font-medium transition-colors',
            sidebarOpen
              ? 'bg-charcoal text-white'
              : 'bg-white text-charcoal border border-charcoal/15',
          ].join(' ')}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? (
            <>✕ {t('closeList')}</>
          ) : (
            <>
              ☰ {t('sidebarTitle')}
              {activeFilterCount > 0 && (
                <span className="bg-olive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {activeFilterCount}
                </span>
              )}
            </>
          )}
        </button>

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-[1050] bg-black/20"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* LEGEND — desktop bottom-left overlay                                */}
      {/* ------------------------------------------------------------------ */}
      <div className="hidden lg:flex absolute bottom-6 left-[24.5rem] z-[900] bg-white/90 backdrop-blur-sm border border-parchment rounded-sm px-3 py-2 gap-3 shadow-sm">
        <span className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mr-1 self-center">
          {t('legendTitle')}
        </span>
        {(['food', 'brocante', 'crafts', 'mixed'] as MarketTypeKey[]).map((type) => (
          <span key={type} className="flex items-center gap-1.5 text-xs font-body text-charcoal/70">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: MARKET_TYPE_COLORS[type] }}
            />
            {t(
              type === 'food'
                ? 'typeFood'
                : type === 'brocante'
                ? 'typeBrocante'
                : type === 'crafts'
                ? 'typeCrafts'
                : 'typeMixed'
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
