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
      {/* Name */}
      <h3 className="font-heading font-bold text-base text-charcoal leading-tight mb-1">
        {field.name}
      </h3>

      {/* Village · Department */}
      <p className="text-sm text-charcoal/70 mb-3">
        {field.village}
        {field.postcode && <span className="text-charcoal/50"> {field.postcode}</span>}
        {field.department !== field.village && (
          <span className="text-charcoal/50"> · {field.department}</span>
        )}
      </p>

      {/* Type + Bloom badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {/* Location type */}
        <span
          className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm text-white"
          style={{ backgroundColor: color }}
        >
          {label}
        </span>

        {/* Bloom period */}
        <span
          className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm border ${
            blooming
              ? 'bg-[#7B5EA7] text-white border-[#7B5EA7]'
              : 'bg-white text-charcoal border-charcoal/25'
          }`}
        >
          {blooming ? '🌸 In bloom now' : `🌿 ${bloomLabel(field)}`}
        </span>
      </div>

      {/* Notes */}
      {field.notes && (
        <p className="text-xs text-charcoal/80 leading-relaxed mb-3 border-l-2 border-charcoal/20 pl-2">
          {field.notes.length > 160 ? field.notes.slice(0, 157) + '…' : field.notes}
        </p>
      )}

      {/* Address */}
      {field.address && (
        <p className="text-xs text-charcoal/60 mb-2">{field.address}</p>
      )}

      {/* Phone */}
      {field.phone && (
        <a
          href={`tel:${field.phone}`}
          className="block text-xs text-charcoal/70 mb-2 hover:text-charcoal transition-colors font-medium"
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
          className="block w-full text-center bg-[#7B5EA7] text-white text-xs font-semibold py-2 px-3 rounded-sm hover:bg-[#6B4F97] transition-colors mt-1"
        >
          Visit website →
        </a>
      )}
    </div>
  );
}
