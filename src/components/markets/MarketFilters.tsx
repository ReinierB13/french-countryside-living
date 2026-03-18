'use client';

import { useTranslations } from 'next-intl';
import {
  DAYS_OF_WEEK,
  DEPARTMENTS,
  MARKET_TYPES,
  MARKET_TYPE_COLORS,
  type ActiveFilters,
  type MarketTypeKey,
  type SeasonalityFilter,
  getTodayName,
  hasActiveFilters,
} from './marketsData';

interface Props {
  filters: ActiveFilters;
  onFiltersChange: (filters: ActiveFilters) => void;
  totalCount: number;
  filteredCount: number;
}

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

const DAY_SHORT_KEYS: Record<string, string> = {
  Monday: 'mondayShort',
  Tuesday: 'tuesdayShort',
  Wednesday: 'wednesdayShort',
  Thursday: 'thursdayShort',
  Friday: 'fridayShort',
  Saturday: 'saturdayShort',
  Sunday: 'sundayShort',
};

const TYPE_LABEL_KEYS: Record<MarketTypeKey, string> = {
  food: 'typeFood',
  brocante: 'typeBrocante',
  crafts: 'typeCrafts',
  mixed: 'typeMixed',
};

export default function MarketFilters({ filters, onFiltersChange, filteredCount }: Props) {
  const t = useTranslations('MarketsPage');

  const setToday = () => {
    const today = getTodayName();
    onFiltersChange({ ...filters, days: [today] });
  };

  const clearAll = () =>
    onFiltersChange({ days: [], types: [], departments: [], seasonality: 'all' });

  const active = hasActiveFilters(filters);

  return (
    <div className="bg-white border-b border-parchment px-4 py-3 space-y-3">
      {/* Top row: Today shortcut + clear */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={setToday}
          className="flex items-center gap-1.5 bg-olive text-white text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-olive-dark transition-colors"
        >
          <span>★</span>
          {t('todayButton')}
        </button>

        <div className="flex items-center gap-2">
          {filteredCount > 0 && (
            <span className="text-xs text-charcoal/50 font-body">
              {t('marketsFound', { count: filteredCount })}
            </span>
          )}
          {active && (
            <button
              onClick={clearAll}
              className="text-xs text-terracotta hover:underline font-body"
            >
              {t('clearFilters')}
            </button>
          )}
        </div>
      </div>

      {/* Day chips */}
      <div>
        <p className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mb-1.5">
          {t('filterDay')}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {DAYS_OF_WEEK.map((day) => {
            const active = filters.days.includes(day);
            return (
              <button
                key={day}
                onClick={() =>
                  onFiltersChange({ ...filters, days: toggle(filters.days, day) })
                }
                className={`text-xs px-2.5 py-1 rounded-sm border font-body transition-colors ${
                  active
                    ? 'bg-olive text-white border-olive'
                    : 'bg-white text-charcoal border-charcoal/20 hover:border-olive hover:text-olive'
                }`}
              >
                {t(DAY_SHORT_KEYS[day])}
              </button>
            );
          })}
        </div>
      </div>

      {/* Market type chips */}
      <div>
        <p className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mb-1.5">
          {t('filterType')}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {MARKET_TYPES.map((type) => {
            const active = filters.types.includes(type);
            const color = MARKET_TYPE_COLORS[type as MarketTypeKey];
            return (
              <button
                key={type}
                onClick={() =>
                  onFiltersChange({ ...filters, types: toggle(filters.types, type) })
                }
                className={`text-xs px-2.5 py-1 rounded-sm border font-body transition-colors ${
                  active ? 'text-white border-transparent' : 'bg-white border-charcoal/20 hover:border-current'
                }`}
                style={
                  active
                    ? { backgroundColor: color, borderColor: color }
                    : { color }
                }
              >
                {t(TYPE_LABEL_KEYS[type as MarketTypeKey])}
              </button>
            );
          })}
        </div>
      </div>

      {/* Department + Seasonality row */}
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {/* Department */}
        <div className="flex-1 min-w-[160px]">
          <p className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mb-1.5">
            {t('filterDepartment')}
          </p>
          <div className="space-y-1">
            {DEPARTMENTS.map((dept) => {
              const checked = filters.departments.includes(dept);
              return (
                <label key={dept} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      onFiltersChange({
                        ...filters,
                        departments: toggle(filters.departments, dept),
                      })
                    }
                    className="w-3.5 h-3.5 accent-olive"
                  />
                  <span className="text-xs font-body text-charcoal/70 group-hover:text-charcoal">
                    {dept}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Seasonality */}
        <div className="flex-1 min-w-[140px]">
          <p className="text-xs font-heading uppercase tracking-widest text-charcoal/40 mb-1.5">
            {t('filterSeasonality')}
          </p>
          <div className="space-y-1">
            {(['all', 'year_round', 'summer'] as SeasonalityFilter[]).map((s) => {
              const labelKey =
                s === 'all' ? 'seasonAll' : s === 'year_round' ? 'seasonYearRound' : 'seasonSummer';
              return (
                <label key={s} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="seasonality"
                    checked={filters.seasonality === s}
                    onChange={() => onFiltersChange({ ...filters, seasonality: s })}
                    className="w-3.5 h-3.5 accent-olive"
                  />
                  <span className="text-xs font-body text-charcoal/70 group-hover:text-charcoal">
                    {t(labelKey)}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
