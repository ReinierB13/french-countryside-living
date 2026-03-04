import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Marcel from '@/components/Marcel';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Provence',
    description: 'Villages, vineyards, olive groves, and the perfume of wild herbs.',
  };
}

export default async function ProvencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('ProvencePage');

  const provenceArticles = articles.filter((a) => a.category === 'Provence');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="The hills and villages of Provence"
        height="large"
        overlay="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Villages & Landscapes */}
        <section className="mb-20">
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Les Villages</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">{t('villagesTitle')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose-countryside">
              <p>
                Provence is a landscape of extraordinary variety compressed into a relatively small area. From the white limestone ridges of the Alpilles to the red ochre cliffs of the Lubéron, from the salt marshes of the Camargue to the lavender plateaus of the Vaucluse — every corner is different and every corner is beautiful.
              </p>
              <p>
                The villages are perched. This is the first thing you notice. The medieval builders of Provence had good reason to build high — protection from raiders and bandits who swept across the plains. The result, centuries later, is a series of villages that seem to grow organically from the rock itself.
              </p>
              <p>
                Les Baux-de-Provence, Gordes, Roussillon, Moustiers-Sainte-Marie — these are the famous names. But the real Provence is in the less-visited places. The village with three hundred inhabitants, one bar, one boulangerie, and a church that rings the hours with a slightly flat bell.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: 'Les Baux-de-Provence',
                  desc: 'The eagle\'s nest. A medieval citadel on white cliffs, with views to the sea on a clear day.',
                  region: 'Les Alpilles',
                },
                {
                  name: 'Saint-Rémy-de-Provence',
                  desc: 'A lively market town at the foot of the Alpilles. Wednesday market, Roman ruins, Van Gogh.',
                  region: 'Les Alpilles',
                },
                {
                  name: 'Gordes',
                  desc: 'The most photographed village in France, built in pale golden stone on a dramatic ridge.',
                  region: 'Lubéron',
                },
                {
                  name: 'Roussillon',
                  desc: 'The village of ochre — every building painted in shades of red, orange, and gold.',
                  region: 'Lubéron',
                },
              ].map((village) => (
                <div key={village.name} className="bg-white border border-parchment rounded-sm p-5 flex gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold text-charcoal">{village.name}</h3>
                      <span className="text-xs font-body text-olive bg-olive/10 px-2 py-0.5 rounded-sm">
                        {village.region}
                      </span>
                    </div>
                    <p className="font-body text-sm text-charcoal/70">{village.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marcel tip */}
        <div className="max-w-3xl mx-auto mb-20">
          <Marcel
            type="rose"
            text="Visit the villages in the off-season. October is perfect — the light is extraordinary, the crowds are gone, and the restaurants are still open. You can actually hear yourself think."
          />
        </div>

        {/* Markets & Food */}
        <section className="mb-20">
          <div className="section-divider" />
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Les Marchés</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">{t('marketsTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍅',
                title: 'The Produce Market',
                desc: 'Tomatoes, aubergines, peppers, courgettes, salads — the vegetables of the South, sold by the farmers who grew them. Come early. The best is gone by 9am.',
              },
              {
                icon: '🧀',
                title: 'Cheese & Charcuterie',
                desc: 'The fromagerie stalls and the charcuterie. Fromage de chèvre in every stage from fresh to aged, alongside terrines, saucissons, and the indispensable paté de foie.',
              },
              {
                icon: '🌿',
                title: 'Herbs & Spices',
                desc: 'Bunches of fresh thyme, rosemary, lavender. Jars of herbes de Provence. The perfume of a Provençal market stall is one of the great sensory experiences of France.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-parchment border border-amber/20 rounded-sm p-6">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-sm text-charcoal/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-charcoal text-parchment rounded-sm p-6">
            <h3 className="font-heading text-lg font-bold text-amber mb-4">Major Markets Near Les Alpilles</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 font-body text-sm">
              {[
                { day: 'Monday', town: 'Châteaurenard' },
                { day: 'Tuesday', town: 'Tarascon' },
                { day: 'Wednesday', town: 'Saint-Rémy' },
                { day: 'Thursday', town: 'Fontvieille' },
                { day: 'Friday', town: 'Saint-Martin' },
                { day: 'Saturday', town: 'Arles' },
                { day: 'Sunday', town: 'Saint-Étienne' },
              ].map((m) => (
                <div key={m.day} className="text-parchment/80">
                  <span className="text-amber font-semibold block text-xs uppercase tracking-widest mb-0.5">{m.day}</span>
                  <span>{m.town}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wine & Olive Oil */}
        <section className="mb-20">
          <div className="section-divider" />
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">The Terroir</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">{t('wineTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">🍷 Wine</h3>
              <div className="prose-countryside">
                <p>
                  Provence is France&apos;s oldest wine region. The Greeks planted vines here before the Romans arrived, and wine has been made on these hillsides for more than 2,600 years. The great appellations of the region — Châteauneuf-du-Pape, Gigondas, Bandol, Palette — represent some of the finest wines in France.
                </p>
                <p>
                  But it is rosé that Provence is most famous for today. The pale, dry rosé of Provence — utterly unlike the sweet rosés of elsewhere — is the wine of summer in the South. Served cold, in a café in the shade of the plane trees, it is perfection.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">🫒 Olive Oil</h3>
              <div className="prose-countryside">
                <p>
                  The olive trees of Provence are among the oldest cultivated plants in France. Some of the trees in the Alpilles were already ancient when the Romans arrived. The oil they produce — fruity, peppery, complex — is classified under the AOP designation, guaranteeing its origin and quality.
                </p>
                <p>
                  The moulin — the olive mill — is an essential part of November in Provence. Families bring their harvest in sacks and crates, and within 24 hours it is converted to oil. The cooperative mills operate around the clock during the harvest season, seven days a week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {provenceArticles.length > 0 && (
          <section>
            <div className="section-divider" />
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">Stories from Provence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {provenceArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} locale={locale} />
              ))}
            </div>
            <div className="mt-6">
              <Link href={`/${locale}/articles`} className="text-terracotta font-body text-sm hover:underline">
                All articles →
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
