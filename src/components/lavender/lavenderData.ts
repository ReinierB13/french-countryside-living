export interface LavenderField {
  id: string;
  name: string;
  village: string;
  department: string;
  lat: number;
  lng: number;
  region: LavenderRegion;
  location: LavenderLocationType;
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
  | 'valensole'
  | 'luberon'
  | 'sault'
  | 'verdon'
  | 'drome';

export type LavenderLocationType =
  | 'field'
  | 'distillery'
  | 'farm'
  | 'viewpoint';

export const LOCATION_TYPE_COLORS: Record<LavenderLocationType, string> = {
  field:      '#7B5EA7', // lavender purple
  distillery: '#A04F8C', // mauve
  farm:       '#556B2F', // olive
  viewpoint:  '#4A6FA5', // slate blue
};

export const LOCATION_TYPE_LABELS: Record<LavenderLocationType, string> = {
  field:      'Field',
  distillery: 'Distillery',
  farm:       'Farm / Domain',
  viewpoint:  'Viewpoint',
};

export const REGION_LABELS: Record<LavenderRegion, string> = {
  valensole: 'Plateau de Valensole',
  luberon:   'Luberon',
  sault:     'Plateau de Sault',
  verdon:    'Gorges du Verdon',
  drome:     'Drôme Provençale',
};

export const LAVENDER_REGIONS: LavenderRegion[] = [
  'valensole',
  'luberon',
  'sault',
  'verdon',
  'drome',
];

export const LAVENDER_LOCATION_TYPES: LavenderLocationType[] = [
  'field',
  'distillery',
  'farm',
  'viewpoint',
];

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export interface LavenderFilters {
  regions: LavenderRegion[];
  locationTypes: LavenderLocationType[];
  bloomingNow: boolean;
}

export const DEFAULT_FILTERS: LavenderFilters = {
  regions: [],
  locationTypes: [],
  bloomingNow: false,
};

export function getCurrentMonth(): number {
  return new Date().getMonth() + 1; // 1-based
}

export function isCurrentlyBlooming(field: LavenderField): boolean {
  const month = getCurrentMonth();
  return month >= field.bloom_start_month && month <= field.bloom_end_month;
}

export function filterFields(fields: LavenderField[], filters: LavenderFilters): LavenderField[] {
  return fields.filter((f) => {
    if (filters.regions.length > 0 && !filters.regions.includes(f.region)) return false;
    if (filters.locationTypes.length > 0 && !filters.locationTypes.includes(f.location)) return false;
    if (filters.bloomingNow && !isCurrentlyBlooming(f)) return false;
    return true;
  });
}

export function hasActiveFilters(filters: LavenderFilters): boolean {
  return (
    filters.regions.length > 0 ||
    filters.locationTypes.length > 0 ||
    filters.bloomingNow
  );
}

export function bloomLabel(field: LavenderField): string {
  const start = MONTH_NAMES[field.bloom_start_month - 1];
  const end = MONTH_NAMES[field.bloom_end_month - 1];
  if (start === end) return start;
  return `${start} – ${end}`;
}
