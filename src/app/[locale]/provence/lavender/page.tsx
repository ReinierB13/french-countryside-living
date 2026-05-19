import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import LavenderMapClient from '@/components/lavender/LavenderMapClient';
import { supabase } from '@/lib/supabase';
import type { LavenderField } from '@/components/lavender/lavenderData';

const BASE_URL = 'https://www.french-countryside-living.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const title = isEn
    ? 'Lavender Fields Map — Find Lavender in Provence'
    : 'Carte des Champs de Lavande en Provence';

  const description = isEn
    ? 'Interactive map of lavender fields, farms, and distilleries across Provence — Plateau de Valensole, Luberon, Sault, and Drôme Provençale. Find when and where lavender blooms.'
    : 'Carte interactive des champs de lavande, fermes et distilleries en Provence — Valensole, Luberon, Sault et Drôme Provençale.';

  const canonical = isEn
    ? `${BASE_URL}/provence/lavender`
    : `${BASE_URL}/fr/provence/lavender`;

  return {
    title,
    description,
    keywords: isEn
      ? [
          'lavender fields Provence', 'lavender Provence map', 'Plateau de Valensole',
          'lavender Luberon', 'lavender Sault', 'lavender farms France',
          'lavender distillery Provence', 'when does lavender bloom Provence',
          'lavender season Provence', 'Drôme Provençale lavender',
        ]
      : [
          'champs de lavande Provence', 'lavande Valensole', 'lavande Luberon',
          'lavande Sault', 'distillerie lavande Provence', 'quand fleurit la lavande',
        ],
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/provence/lavender`,
        fr: `${BASE_URL}/fr/provence/lavender`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'French Countryside Living',
      images: [
        {
          url: `${BASE_URL}/images/lavender.jpg`,
          width: 1200,
          height: 630,
          alt: 'Purple lavender fields on the Plateau de Valensole, Provence',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/lavender.jpg`],
    },
  };
}

async function fetchLavenderFields(): Promise<LavenderField[]> {
  try {
    const { data, error } = await supabase
      .from('lavender_fields')
      .select('*')
      .order('region', { ascending: true })
      .order('village', { ascending: true });

    if (error) {
      console.error('Error fetching lavender fields:', error.message);
      return [];
    }

    return (data ?? []) as LavenderField[];
  } catch (err) {
    console.error('Failed to fetch lavender fields:', err);
    return [];
  }
}

export default async function LavenderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const fields = await fetchLavenderFields();

  return (
    <>
      {/* Hero */}
      <Hero
        title="Lavender Fields of Provence"
        subtitle="Find fields, farms, and distilleries — and discover when the purple blooms"
        imageSrc="/images/lavender.jpg"
        imageAlt="Purple lavender rows stretching to the horizon on the Plateau de Valensole"
        height="medium"
        overlay="medium"
      />

      {/* Breadcrumb bar */}
      <div className="bg-charcoal text-parchment px-4 sm:px-6 py-2.5 flex items-center gap-3">
        <Link
          href={`/${locale}/provence`}
          className="text-parchment/50 hover:text-parchment text-xs font-body transition-colors"
        >
          ← Provence
        </Link>
        {fields.length > 0 && (
          <>
            <span className="text-parchment/20 text-xs">·</span>
            <span className="font-body text-xs text-parchment/35">
              {fields.length} field{fields.length !== 1 ? 's' : ''}
            </span>
          </>
        )}
      </div>

      {/* Map */}
      {fields.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-parchment">
          <span className="text-4xl mb-4">🌾</span>
          <h2 className="font-heading text-xl font-bold text-charcoal mb-2">
            Lavender fields coming soon
          </h2>
          <p className="font-body text-sm text-charcoal/60 max-w-sm">
            We are mapping lavender fields across Provence. Please check back soon, or{' '}
            <Link href={`/${locale}/contact`} className="text-terracotta hover:underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      ) : (
        <LavenderMapClient fields={fields} />
      )}

      {/* Info footer */}
      <div className="bg-[#7B5EA7]/10 border-t border-[#7B5EA7]/20 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-heading font-semibold text-charcoal text-sm mb-1">
            About lavender season
          </p>
          <p className="font-body text-xs text-charcoal/65 leading-relaxed">
            Lavender typically blooms from late June through August in Provence, with peak colour
            around mid-July. Bloom dates vary by altitude and variety — always check locally before
            making a special journey. Distilleries are often open for visits during harvest season.
          </p>
        </div>
      </div>
    </>
  );
}
