import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import RecipeGrid from '@/components/RecipeGrid';
import { getRecipes } from '@/lib/content';
import { categoryConfig } from '@/components/RecipeCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Recipes',
    description: 'Wild game, potjiekos, braai, and the flavours of Provence.',
  };
}

export default async function RecipesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const { category } = await searchParams;
  const t = await getTranslations('RecipesPage');

  const validCategory = category && categoryConfig[category] ? category : undefined;

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Cooking over fire in the Provençal countryside"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <RecipeGrid recipes={getRecipes(locale)} locale={locale} initialCategory={validCategory} />
      </div>
    </>
  );
}
