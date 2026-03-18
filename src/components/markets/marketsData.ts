export interface Market {
  id: string;
  name: string;
  village: string;
  department: string;
  lat: number;
  lng: number;
  day_of_week: string;
  market_type: string[];
  seasonality: 'year_round' | 'summer' | 'seasonal';
  season_months?: number[] | null;
  postcode?: string | null;
  mairie_url?: string | null;
  mairie_phone?: string | null;
  notes?: string | null;
  created_at?: string;
}

export type MarketTypeKey = 'food' | 'brocante' | 'crafts' | 'mixed';
export type SeasonalityValue = 'year_round' | 'summer' | 'seasonal';
export type SeasonalityFilter = 'all' | 'year_round' | 'summer';

export const MARKET_TYPE_COLORS: Record<MarketTypeKey, string> = {
  food: '#C56A3D',     // terracotta
  brocante: '#4A6FA5', // slate blue
  crafts: '#556B2F',   // olive green
  mixed: '#E3A327',    // amber
};

export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const DEPARTMENTS = [
  'Bouches-du-Rhône',
  'Var',
  'Vaucluse',
  'Alpes-de-Haute-Provence',
  'Drôme Provençale',
] as const;

export const MARKET_TYPES: MarketTypeKey[] = ['food', 'brocante', 'crafts', 'mixed'];

export interface ActiveFilters {
  days: string[];
  types: string[];
  departments: string[];
  seasonality: SeasonalityFilter;
}

export const DEFAULT_FILTERS: ActiveFilters = {
  days: [],
  types: [],
  departments: [],
  seasonality: 'all',
};

export function filterMarkets(markets: Market[], filters: ActiveFilters): Market[] {
  return markets.filter((m) => {
    if (filters.days.length > 0 && !filters.days.includes(m.day_of_week)) return false;
    if (filters.types.length > 0 && !filters.types.some((t) => m.market_type.includes(t))) return false;
    if (filters.departments.length > 0 && !filters.departments.includes(m.department)) return false;
    if (filters.seasonality === 'year_round' && m.seasonality !== 'year_round') return false;
    if (filters.seasonality === 'summer' && m.seasonality === 'year_round') return false;
    return true;
  });
}

export function getPrimaryType(types: string[]): MarketTypeKey {
  for (const t of types) {
    if (t in MARKET_TYPE_COLORS) return t as MarketTypeKey;
  }
  return 'mixed';
}

export function getTodayName(): string {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}

export function hasActiveFilters(filters: ActiveFilters): boolean {
  return (
    filters.days.length > 0 ||
    filters.types.length > 0 ||
    filters.departments.length > 0 ||
    filters.seasonality !== 'all'
  );
}
