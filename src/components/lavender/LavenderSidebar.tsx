'use client';

import type { LavenderField, LavenderLocationType } from './lavenderData';
import {
  LOCATION_TYPE_COLORS,
  LOCATION_TYPE_LABELS,
  bloomLabel,
} from './lavenderData';

interface Props {
  fields: LavenderField[];
  selectedId: string | null;
  onSelect: (field: LavenderField) => void;
}

export default function LavenderSidebar({ fields, selectedId, onSelect }: Props) {
  if (fields.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <span className="text-3xl mb-3">🌾</span>
        <p className="font-body text-sm text-charcoal/50">No fields match your filters.</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-parchment">
      {fields.map((field) => {
        const isSelected = field.id === selectedId;
        const color = LOCATION_TYPE_COLORS[field.location_type as LavenderLocationType] ?? '#7B5EA7';
        const label = LOCATION_TYPE_LABELS[field.location_type as LavenderLocationType] ?? field.location_type;

        return (
          <li key={field.id}>
            <button
              onClick={() => onSelect(field)}
              className={`w-full text-left px-4 py-3 transition-colors hover:bg-parchment/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B5EA7] ${
                isSelected ? 'bg-parchment border-l-2 border-[#7B5EA7]' : ''
              }`}
            >
              {/* Name */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-heading font-semibold text-sm text-charcoal leading-snug">
                  {field.village}
                </span>
              </div>

              {/* Full name */}
              <p className="text-xs font-body text-charcoal/55 mb-1.5 leading-tight">
                {field.name !== field.village ? field.name : field.department}
              </p>

              {/* Type chip + bloom period */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-sm text-white font-medium leading-none"
                  style={{ backgroundColor: color }}
                >
                  {label}
                </span>
                <span className="text-[10px] text-charcoal/40 font-body">
                  {bloomLabel(field)}
                </span>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
