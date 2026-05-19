export interface LavenderField {
  id: string;
  name: string;
  village: string;
  department: string;
  lat: number;
  lng: number;
  region: LavenderRegion;
  location_type: LavenderLocationType;
  bloom_start_month: number;
  bloom_end_month: number;
  seasonality?: string | null;
  season_months?: number[] | null;
  address?: string | null;
  phone?: string | null;
  website?: string | null;
  notes?: string | null;
  postcode?: string | null;
  confirmed: boolean;
  photo_urls?: string[] | null;
  created_at?: string;
}

export type LavenderRegion =
  | 'Valensole'
  | 'Luberon'
  | 'Sault'
  | 'Albion'
  | 'Drôme Provençale';

export type LavenderLocationType =
  | 'farm'
  | 'viewpoint'
  | 'abbey'
  | 'museum';

export const LOCATION_TYPE_COLORS: Record<LavenderLocationType, string> = {
  farm:      '#556B2F', // olive green
  viewpoint: '#4A6FA5', // slate blue
  abbey:     '#8B6040', // warm brown
  museum:    '#7B5EA7', // lavender purple
};

export const LOCATION_TYPE_LABELS: Record<LavenderLocationType, string> = {
  farm:      'Farm / Domain',
  viewpoint: 'Viewpoint',
  abbey:     'Abbey',
  museum:    'Museum',
};

export const REGION_LABELS: Record<LavenderRegion, string> = {
  'Valensole':        'Plateau de Valensole',
  'Luberon':          'Luberon',
  'Sault':            'Plateau de Sault',
  'Albion':           'Plateau d\'Albion',
  'Drôme Provençale': 'Drôme Provençale',
};

export const LAVENDER_REGIONS: LavenderRegion[] = [
  'Valensole',
  'Luberon',
  'Sault',
  'Albion',
  'Drôme Provençale',
];

export const LAVENDER_LOCATION_TYPES: LavenderLocationType[] = [
  'farm',
  'viewpoint',
  'abbey',
  'museum',
];

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export interface LavenderFilters {
  regions: LavenderRegion[];
  locationTypes: LavenderLocationType[];
}

export const DEFAULT_FILTERS: LavenderFilters = {
  regions: [],
  locationTypes: [],
};

export function filterFields(fields: LavenderField[], filters: LavenderFilters): LavenderField[] {
  return fields.filter((f) => {
    if (filters.regions.length > 0 && !filters.regions.includes(f.region)) return false;
    if (filters.locationTypes.length > 0 && !filters.locationTypes.includes(f.location_type)) return false;
    return true;
  });
}

export function hasActiveFilters(filters: LavenderFilters): boolean {
  return filters.regions.length > 0 || filters.locationTypes.length > 0;
}

export function bloomLabel(field: LavenderField): string {
  const start = MONTH_NAMES[field.bloom_start_month - 1];
  const end = MONTH_NAMES[field.bloom_end_month - 1];
  if (start === end) return start;
  return `${start} – ${end}`;
}
