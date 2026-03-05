import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Traditions',
    description: 'The festivals, games, and customs that make rural French life unique.',
  };
}

export default async function FrancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('FrancePage');

  const traditionsArticles = articles.filter((a) => a.category === 'Traditions');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Rural French traditions"
        height="large"
        overlay="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* Tradition cards */}
        <section className="mb-20">
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Heritage</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-10">{t('traditionsTitle')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🥖',
                title: 'The Boulangerie',
                desc: 'Every village, however small, has its baker. Fresh bread in the morning is not a luxury in France — it is a right.',
              },
              {
                icon: '🍷',
                title: 'Le Marché',
                desc: 'The weekly market is the heartbeat of rural France. Farmers, cheesemakers, fishmongers — all gathered in the village square.',
              },
              {
                icon: '🎳',
                title: 'La Pétanque',
                desc: 'In the shade of the plane trees, on a dusty court, the afternoon ritual of pétanque continues as it has for generations.',
              },
              {
                icon: '🐂',
                title: 'Les Abrivados',
                desc: 'The thundering Camargue bulls driven through village streets — a spectacle of horsemanship, courage, and ancient tradition.',
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

        {/* Traditions articles */}
        <section>
          <div className="section-divider" />
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Read</p>
              <h2 className="font-heading text-3xl font-bold text-charcoal">{t('articlesTitle')}</h2>
            </div>
            <Link href={`/${locale}/articles`} className="text-terracotta font-body text-sm hover:underline hidden sm:block">
              All articles →
            </Link>
          </div>

          {traditionsArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {traditionsArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} locale={locale} />
              ))}
            </div>
          ) : (
            <p className="font-body text-charcoal/50 text-lg">Articles coming soon.</p>
          )}
        </section>

      </div>
    </>
  );
}
