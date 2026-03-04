import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Marcel from '@/components/Marcel';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getArticleBySlug, getRelatedArticles, articles } from '@/lib/content';
import { routing } from '@/i18n/routing';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    articles.map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Not Found' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations('ArticlePage');

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === 'fr' ? 'fr-FR' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <>
      {/* Article hero */}
      <div
        className="relative min-h-[50vh] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pb-12 pt-24">
          <span className="inline-block bg-terracotta text-white text-xs font-heading font-semibold px-3 py-1 rounded-sm uppercase tracking-wide mb-4">
            {article.category}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight mb-3">
            {article.title}
          </h1>
          <p className="font-body text-parchment/80 text-sm">{formattedDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href={`/${locale}/articles`} className="text-terracotta font-body text-sm hover:underline mb-8 block">
          {t('backToArticles')}
        </Link>

        {/* Excerpt / intro */}
        <p className="font-body text-xl text-charcoal/80 italic leading-relaxed mb-8 border-l-4 border-amber pl-5">
          {article.excerpt}
        </p>

        {/* Body */}
        <div
          className="prose-countryside"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Marcel tip */}
        {article.marcelTip && (
          <Marcel
            type={article.marcelType ?? 'default'}
            text={article.marcelTip}
            className="my-10"
          />
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-charcoal/10">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-parchment border border-charcoal/15 font-body text-xs text-charcoal/60 px-3 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-12">
        <NewsletterSignup
          title="Enjoying the stories?"
          description="Get new articles from Provence delivered to your inbox."
          compact
        />
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-12 bg-charcoal/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">{t('relatedArticles')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
