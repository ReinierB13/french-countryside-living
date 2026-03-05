import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Marcel from '@/components/Marcel';
import ArticleCard from '@/components/ArticleCard';
import VideoCard from '@/components/VideoCard';
import { articles, videos } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Le Potager',
    description: 'Growing food in the Provençal sun — vegetables, herbs, and the quiet rhythm of the kitchen garden.',
  };
}

export default async function PotagerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('PotagerPage');

  const potagerArticles = articles.filter((a) => a.category === 'Potager');
  const potagerVideos = videos.filter((v) => v.category === 'Potager');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/hero-spring.jpg"
        imageAlt="A Provençal kitchen garden in summer"
        height="large"
        overlay="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <section className="mb-20">
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Le Jardin</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">{t('introTitle')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose-countryside">
              <p>
                A Provençal potager is not just a vegetable garden. It is a statement of intent. You are saying: I belong here. I will tend this soil. I will eat what this ground gives me.
              </p>
              <p>
                In spring, the planning begins — rows of tomatoes, aubergines, courgettes, peppers, and salads. In summer, the garden gives back everything you put in, and more. In autumn, the last harvests before the ground rests.
              </p>
              <p>
                There is something deeply satisfying about pulling a tomato from a plant you have watered every day since May. The potager is patience made edible.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: '🍅',
                  title: 'Tomatoes',
                  desc: 'The queen of the potager. Plant after the Ice Saints in mid-May. Water deeply, not often. Stake early.',
                },
                {
                  icon: '🥬',
                  title: 'Salads',
                  desc: 'Sow in succession every two weeks from March to September. Cut-and-come-again varieties reward patience.',
                },
                {
                  icon: '🌿',
                  title: 'Herbs',
                  desc: 'Thyme, rosemary, basil, and parsley. The backbone of Provençal cooking, a few steps from the kitchen door.',
                },
                {
                  icon: '🫑',
                  title: 'Peppers & Aubergines',
                  desc: 'Heat-lovers that thrive in the Provençal summer. Start indoors in February, plant out after all frost risk has passed.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-parchment rounded-sm p-5 flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marcel tip */}
        <div className="max-w-3xl mx-auto mb-20">
          <Marcel
            type="gardener"
            text="Plant your tomatoes after the Ice Saints — les Saints de Glace — in mid-May. The old farmers are right about this. Do not rush the tomatoes."
          />
        </div>

        {/* Articles */}
        <section className="mb-20">
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

          {potagerArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {potagerArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} locale={locale} />
              ))}
            </div>
          ) : (
            <p className="font-body text-charcoal/50 text-lg">{t('noArticles')}</p>
          )}
        </section>

        {/* Videos */}
        {potagerVideos.length > 0 && (
          <section>
            <div className="section-divider" />
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Watch</p>
                <h2 className="font-heading text-3xl font-bold text-charcoal">{t('videosTitle')}</h2>
              </div>
              <Link href={`/${locale}/videos`} className="text-terracotta font-body text-sm hover:underline hidden sm:block">
                All videos →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {potagerVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
