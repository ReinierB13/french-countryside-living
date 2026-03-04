import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import RecipeCard from '@/components/RecipeCard';
import Marcel from '@/components/Marcel';
import { recipes } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Recipes',
    description: 'Wild game, potjiekos, braai, and the flavours of Provence.',
  };
}

export default async function RecipesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('RecipesPage');

  const wildGame = recipes.filter((r) => r.category === 'wild-game');
  const braai = recipes.filter((r) => r.category === 'braai');
  const provencal = recipes.filter((r) => r.category === 'provencal');

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
        {/* Wild Game */}
        {wildGame.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">🎯</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">
                {t('wildGame')}
              </h2>
              <div className="flex-1 h-px bg-charcoal/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wildGame.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* Marcel tip */}
        <div className="max-w-3xl mx-auto mb-16">
          <Marcel
            type="cooking"
            text="Wild game needs time. Don't rush the marinade. Don't rush the browning. And never, ever rush the daube."
          />
        </div>

        {/* Braai & Fire */}
        {braai.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">🔥</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">
                {t('braai')}
              </h2>
              <div className="flex-1 h-px bg-charcoal/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {braai.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* Provençal */}
        {provencal.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">🫒</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">
                {t('provencal')}
              </h2>
              <div className="flex-1 h-px bg-charcoal/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {provencal.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
