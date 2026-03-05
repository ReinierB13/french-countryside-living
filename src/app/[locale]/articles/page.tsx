import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ArticleGrid from '@/components/ArticleGrid';
import { articles } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Articles',
    description: 'Stories from the countryside — hunting, cooking, and the rhythm of Provençal life.',
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('ArticlesPage');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Provence countryside"
        height="medium"
        overlay="dark"
      />

      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <ArticleGrid articles={articles} locale={locale} />
      </section>
    </>
  );
}
