import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import RecipeCard from '@/components/RecipeCard';
import VideoCard from '@/components/VideoCard';
import Marcel from '@/components/Marcel';
import { getFeaturedArticles, getLatestVideos, getFeaturedRecipes } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'French Countryside Living — Hunting, Cooking & Life in Rural Provence',
    description: 'Stories, recipes, and countryside life from rural Provence.',
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');

  const articles = getFeaturedArticles(3);
  const videos = getLatestVideos(3);
  const recipes = getFeaturedRecipes(3);

  return (
    <>
      {/* ── Hero ── */}
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Provence countryside at golden hour"
        height="full"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href={`/${locale}/articles`}
            className="bg-terracotta text-white font-body font-semibold px-7 py-3 rounded-sm hover:bg-terracotta-dark transition-colors"
          >
            Read the Stories
          </Link>
          <Link
            href={`/${locale}/recipes`}
            className="bg-white/20 backdrop-blur-sm text-white border border-white/40 font-body font-semibold px-7 py-3 rounded-sm hover:bg-white/30 transition-colors"
          >
            Explore Recipes
          </Link>
        </div>
      </Hero>

      {/* ── Featured Articles ── */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-olive text-xs font-heading uppercase tracking-widest mb-2">
              From the Field
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              {t('featuredArticles')}
            </h2>
          </div>
          <Link
            href={`/${locale}/articles`}
            className="text-terracotta font-body text-sm hover:underline hidden sm:block"
          >
            {t('viewAll')} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} locale={locale} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href={`/${locale}/articles`} className="text-terracotta font-body text-sm hover:underline">
            {t('viewAll')} →
          </Link>
        </div>
      </section>

      {/* ── Marcel hunting tip ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Marcel
          type="hunter"
          text="The wild boar season in Provence runs from September to January. The best hunts happen early in the morning, when the mist is still on the fields and the dogs can smell everything."
        />
      </div>

      {/* ── Latest Videos ── */}
      <section className="py-16 bg-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-olive text-xs font-heading uppercase tracking-widest mb-2">
                Watch
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
                {t('latestVideos')}
              </h2>
            </div>
            <Link
              href={`/${locale}/videos`}
              className="text-terracotta font-body text-sm hover:underline hidden sm:block"
            >
              {t('viewAll')} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.youtube.com/@christophereinier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-charcoal text-parchment font-body font-semibold px-6 py-3 rounded-sm hover:bg-charcoal/80 transition-colors"
            >
              ▶ Visit our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* ── Recipes ── */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-olive text-xs font-heading uppercase tracking-widest mb-2">
              From the Kitchen
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              {t('recipes')}
            </h2>
          </div>
          <Link
            href={`/${locale}/recipes`}
            className="text-terracotta font-body text-sm hover:underline hidden sm:block"
          >
            {t('viewAll')} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} locale={locale} />
          ))}
        </div>
      </section>

      {/* ── Marcel cooking tip ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Marcel
          type="cooking"
          text="Brown the meat properly — if it doesn't smell amazing yet, you're doing it wrong. Take your time with the daube. Three hours is not optional."
        />
      </div>

      {/* ── Explore Provence ── */}
      <section className="py-16 bg-olive text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-amber text-xs font-heading uppercase tracking-widest mb-3">
              Discover
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-parchment mb-4">
              {t('exploreProvence')}
            </h2>
            <p className="font-body text-parchment/75 text-lg max-w-2xl mx-auto">
              {t('exploreProvenceDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Villages & Landscapes',
                desc: 'Stone perched villages, white limestone ridges, and the wild garrigue.',
                icon: '🏘',
                href: `/${locale}/provence`,
              },
              {
                title: 'Markets & Food',
                desc: "Fresh produce, olives, herbs, and the flavours of the South.",
                icon: '🧺',
                href: `/${locale}/provence`,
              },
              {
                title: 'Wine & Olive Oil',
                desc: 'The ancient traditions of vine and olive — Provence at its purest.',
                icon: '🫒',
                href: `/${locale}/provence`,
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-olive-dark/60 hover:bg-olive-dark/80 border border-parchment/10 rounded-sm p-6 transition-colors"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-parchment mb-2 group-hover:text-amber transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-parchment/70 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/${locale}/provence`}
              className="inline-block bg-terracotta text-white font-body font-semibold px-7 py-3 rounded-sm hover:bg-terracotta-dark transition-colors"
            >
              {t('discoverMore')} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── France Section ── */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">
              Culture
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-5">
              {t('franceTitle')}
            </h2>
            <p className="font-body text-charcoal/75 leading-relaxed text-lg mb-7">
              {t('franceDesc')}
            </p>
            <Link
              href={`/${locale}/france`}
              className="inline-block bg-olive text-white font-body font-semibold px-6 py-3 rounded-sm hover:bg-olive-dark transition-colors"
            >
              {t('exploreFrance')} →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'La Chasse', desc: 'Hunting culture', icon: '🎯' },
              { label: 'Les Marchés', desc: 'Village markets', icon: '🧺' },
              { label: 'La Cuisine', desc: 'Seasonal cooking', icon: '🍲' },
              { label: 'La Vie', desc: 'Countryside life', icon: '🏡' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-parchment shadow-sm rounded-sm p-5 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="font-heading font-semibold text-charcoal text-sm">{item.label}</p>
                <p className="font-body text-charcoal/50 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
