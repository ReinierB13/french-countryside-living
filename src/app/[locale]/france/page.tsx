import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Marcel from '@/components/Marcel';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'France',
    description: 'Hunting culture, rural traditions, and the soul of the French countryside.',
  };
}

export default async function FrancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('FrancePage');

  const huntingArticles = articles.filter((a) => a.category === 'Hunting');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="The French countryside"
        height="large"
        overlay="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Hunting section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">La Chasse</p>
              <h2 className="font-heading text-3xl font-bold text-charcoal mb-5">{t('huntingTitle')}</h2>
              <div className="prose-countryside">
                <p>{t('huntingDesc')}</p>
                <p>
                  The société de chasse — the hunting society — is a cornerstone of rural French social life. Every commune has one. Membership is passed from fathers to sons, from generation to generation. The rules are strict, the traditions sacred.
                </p>
                <p>
                  The sanglier — wild boar — is the great quarry. Intelligent, powerful, and increasingly numerous, the boar population has exploded across southern France. Hunters are not just sportsmen here; they are land managers, working to keep the boar population in balance with farming and nature.
                </p>
                <p>
                  The season runs from mid-September to the end of January. The battue — driven hunt — is the traditional method. Beaters move through the garrigue, the scrubby Mediterranean bush, pushing game towards waiting hunters. The dogs — Gascon Saintongeois hounds with their mournful eyes — are essential.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-charcoal text-parchment p-8 rounded-sm">
                <h3 className="font-heading text-xl font-bold mb-4 text-amber">The Hunting Calendar</h3>
                <div className="space-y-3 font-body text-sm text-parchment/80">
                  {[
                    { month: 'September', desc: 'Season opens. First drives in the garrigue.' },
                    { month: 'October', desc: 'Peak season. Boar are in rut. Long days in the field.' },
                    { month: 'November', desc: 'Olive harvest. Hunting pauses then resumes.' },
                    { month: 'December', desc: 'Winter hunts. Truffles and boar — the perfect month.' },
                    { month: 'January', desc: 'Final weeks. Season closes at the end of the month.' },
                  ].map((item) => (
                    <div key={item.month} className="flex gap-4 py-2 border-b border-parchment/10 last:border-0">
                      <span className="font-heading font-semibold text-amber w-24 shrink-0">{item.month}</span>
                      <span>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Marcel
              type="hunter"
              text="The French hunter is not a trophy hunter. He is a conservationist, a community member, and above all, a cook. The boar goes in the pot — every single time."
            />
          </div>
        </section>

        {/* Rural Traditions */}
        <section className="mb-20">
          <div className="section-divider" />
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Heritage</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-10">{t('traditionsTitle')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🥖',
                title: 'The Boulangerie',
                desc: "Every village, however small, has its baker. Fresh bread in the morning is not a luxury in France — it is a right.",
              },
              {
                icon: '🍷',
                title: 'Le Marché',
                desc: "The weekly market is the heartbeat of rural France. Farmers, cheesemakers, fishmongers — all gathered in the village square.",
              },
              {
                icon: '🎳',
                title: 'La Pétanque',
                desc: "In the shade of the plane trees, on a dusty court, the afternoon ritual of pétanque continues as it has for generations.",
              },
              {
                icon: '🫒',
                title: "L'Huile d'Olive",
                desc: 'The olive harvest connects modern Provence to its ancient past. Every November, families work together under the same trees their grandparents harvested.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-parchment shadow-sm rounded-sm p-6">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agriculture & Seasons */}
        <section className="mb-20">
          <div className="section-divider" />
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">The Land</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">{t('agricultureTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose-countryside">
              <p>
                Rural France lives by the seasons. The agricultural calendar still dictates the rhythm of village life in ways that the city has long forgotten. Spring is for planting, summer for tending, autumn for harvesting, winter for preservation and preparation.
              </p>
              <p>
                The potager — the kitchen garden — is still a serious affair in Provence. Tomatoes, aubergines, courgettes, herbs: grown on your own land, harvested by your own hand, cooked in your own kitchen. The connection between earth and table is not romantic here. It is practical, and it is daily.
              </p>
            </div>
            <div className="prose-countryside">
              <p>
                The great agricultural traditions of the South — wine, olive oil, lavender, herbs, wheat — are still alive. The cooperative system means that small farmers can pool resources for pressing and bottling. The land is not the property of corporations here; it belongs to families, some of whom have farmed the same terroir for centuries.
              </p>
              <p>
                Climate change is altering the picture. Hotter, drier summers. Later harvests. Earlier springs. The old farmers watch the sky and shake their heads. The young ones adapt. But the essential relationship between the people and the land of Provence has not broken yet.
              </p>
            </div>
          </div>
        </section>

        {/* Hunting articles */}
        {huntingArticles.length > 0 && (
          <section>
            <div className="section-divider" />
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">From the Field</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {huntingArticles.map((article) => (
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
