'use client';

import {
  LAVENDER_REGIONS,
  LAVENDER_LOCATION_TYPES,
  LOCATION_TYPE_COLORS,
  LOCATION_TYPE_LABELS,
  REGION_LABELS,
  type LavenderFilters,
  type LavenderLocationType,
  type LavenderRegion,
  hasActiveFilters,
} from './lavenderData';

interface Props {
  filters: LavenderFilters;
  onFiltersChange: (filters: LavenderFilters) => void;
  totalCount: number;
  filteredCount: number;
}

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export default function LavenderFilters({
  filters,
  onFiltersChange,
  filteredCount,
}: Props) {
  const active = hasActiveFilters(filters);

  const clearAll = () => onFiltersChange({ regions: [], locationTypes: [] });

  return (
    <div className="bg-white border-b border-parchment px-4 py-3 space-y-3">
      {/* Top row: count + clear */}
      {active && (
        <div className="flex items-center justify-between gap-2">
          {filteredCount > 0 && (
            <span className="text-xs text-charcoal/50 font-body">
              {filteredCount} field{filteredCount !== 1 ? 's' : ''}
            </span>
          )}
          <button
            onClick={clearAll}
            className="text-xs text-terracotta hover:underline font-body ml-auto"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Location type chips */}
      <div>
        <p className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mb-1.5">
          Type
        </p>
        <div className="flex flex-wrap gap-1.5">
          {LAVENDER_LOCATION_TYPES.map((type) => {
            const isActive = filters.locationTypes.includes(type);
            const color = LOCATION_TYPE_COLORS[type as LavenderLocationType];
            return (
              <button
                key={type}
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    locationTypes: toggle(filters.locationTypes, type),
                  })
                }
                className={`text-xs px-2.5 py-1 rounded-sm border-2 font-body transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'bg-white text-charcoal'
                }`}
                style={
                  isActive
                    ? { backgroundColor: color, borderColor: color }
                    : { borderColor: color }
                }
              >
                {LOCATION_TYPE_LABELS[type as LavenderLocationType]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Region checkboxes */}
      <div>
        <p className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mb-1.5">
          Region
        </p>
        <div className="space-y-1">
          {LAVENDER_REGIONS.map((region) => {
            const checked = filters.regions.includes(region);
            return (
              <label key={region} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onFiltersChange({
                      ...filters,
                      regions: toggle(filters.regions, region) as LavenderRegion[],
                    })
                  }
                  className="w-3.5 h-3.5 accent-[#7B5EA7]"
                />
                <span className="text-xs font-body text-charcoal/70 group-hover:text-charcoal">
                  {REGION_LABELS[region as LavenderRegion]}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
