'use client';

import type { LavenderField, LavenderLocationType } from './lavenderData';
import {
  LOCATION_TYPE_COLORS,
  LOCATION_TYPE_LABELS,
  bloomLabel,
  isCurrentlyBlooming,
} from './lavenderData';

interface Props {
  field: LavenderField;
}

export default function LavenderPopup({ field }: Props) {
  const color = LOCATION_TYPE_COLORS[field.location_type as LavenderLocationType] ?? '#7B5EA7';
  const label = LOCATION_TYPE_LABELS[field.location_type as LavenderLocationType] ?? field.location_type;
  const blooming = isCurrentlyBlooming(field);

  return (
    <div className="font-body text-charcoal min-w-[220px] max-w-[280px]">
      {/* Header */}
      <div className="mb-2">
        <h3 className="font-heading font-bold text-base text-charcoal leading-tight">
          {field.name}
        </h3>
        <p className="text-sm text-charcoal/60 mt-0.5">
          {field.village}
          {field.postcode && (
            <span className="text-charcoal/40"> {field.postcode}</span>
          )}
          {field.department !== field.village && (
            <span className="text-charcoal/40"> · {field.department}</span>
          )}
        </p>
      </div>

      {/* Type + Bloom status */}
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        <span
          className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-sm text-white"
          style={{ backgroundColor: color }}
        >
          {label}
        </span>
        <span
          className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-sm ${
            blooming
              ? 'bg-[#7B5EA7]/15 text-[#7B5EA7]'
              : 'bg-charcoal/8 text-charcoal/60'
          }`}
        >
          {blooming ? '🌸 In bloom now' : `🌿 ${bloomLabel(field)}`}
        </span>
      </div>

      {/* Region */}
      <div className="mb-2.5">
        <span className="inline-flex items-center gap-1 bg-charcoal/8 text-charcoal text-xs font-medium px-2 py-0.5 rounded-sm">
          📍 {field.department}
        </span>
      </div>

      {/* Notes */}
      {field.notes && (
        <p className="text-xs text-charcoal/65 leading-relaxed mb-3 border-l-2 border-parchment pl-2">
          {field.notes.length > 160 ? field.notes.slice(0, 157) + '…' : field.notes}
        </p>
      )}

      {/* Address */}
      {field.address && (
        <p className="text-xs text-charcoal/50 mb-2">{field.address}</p>
      )}

      {/* Phone */}
      {field.phone && (
        <a
          href={`tel:${field.phone}`}
          className="block text-xs text-charcoal/50 mb-2 hover:text-charcoal transition-colors"
        >
          📞 {field.phone}
        </a>
      )}

      {/* Website */}
      {field.website && (
        <a
          href={field.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#7B5EA7] text-white text-xs font-medium py-1.5 px-3 rounded-sm hover:bg-[#6B4F97] transition-colors mt-1"
        >
          Visit website →
        </a>
      )}
    </div>
  );
}
