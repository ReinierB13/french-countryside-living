import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Marcel from '@/components/Marcel';
import NewsletterSignup from '@/components/NewsletterSignup';
import ShareButtons from '@/components/ShareButtons';
import Comments from '@/components/Comments';
import LikeButton from '@/components/LikeButton';
import RecipeTools from '@/components/RecipeTools';
import { categoryConfig } from '@/components/RecipeCard';
import { getRecipeBySlug, recipes } from '@/lib/content';
import { routing } from '@/i18n/routing';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    recipes.map((r) => ({ locale, slug: r.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: 'Not Found' };
  return {
    title: recipe.title,
    description: recipe.excerpt,
  };
}


export default async function RecipePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations('RecipePage');

  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[50vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${recipe.image})`, filter: 'brightness(1.3)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pb-12 pt-24">
          <span className="inline-block bg-terracotta text-white text-xs font-heading font-semibold px-3 py-1 rounded-sm uppercase tracking-wide mb-4">
            {categoryConfig[recipe.category]?.label ?? recipe.category}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight mb-3">
            {recipe.title}
          </h1>
          <p className="font-body text-parchment/80 italic text-lg">{recipe.excerpt}</p>
        </div>
      </div>

      {/* Recipe info bar */}
      <div className="bg-charcoal text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap gap-6 justify-start">
          <div className="text-center">
            <p className="text-xs font-heading uppercase tracking-widest text-parchment/50 mb-1">{t('serves')}</p>
            <p className="font-heading font-bold text-lg">{recipe.servings}</p>
          </div>
          <div className="w-px bg-parchment/10 self-stretch" />
          <div className="text-center">
            <p className="text-xs font-heading uppercase tracking-widest text-parchment/50 mb-1">{t('prepTime')}</p>
            <p className="font-heading font-bold text-lg">{recipe.prepTime}</p>
          </div>
          <div className="w-px bg-parchment/10 self-stretch" />
          <div className="text-center">
            <p className="text-xs font-heading uppercase tracking-widest text-parchment/50 mb-1">{t('cookTime')}</p>
            <p className="font-heading font-bold text-lg">{recipe.cookTime}</p>
          </div>
          <div className="w-px bg-parchment/10 self-stretch" />
          <div className="text-center">
            <p className="text-xs font-heading uppercase tracking-widest text-parchment/50 mb-1">Difficulty</p>
            <p className="font-heading font-bold text-lg">{recipe.difficulty}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <Link href={`/${locale}/recipes`} className="text-terracotta font-body text-sm hover:underline">
            {t('backToRecipes')}
          </Link>
          <ShareButtons
            title={recipe.title}
            path={`/${locale}/recipes/${recipe.slug}`}
            labels={{
              share: t('share'),
              copyLink: t('copyLink'),
              copied: t('copied'),
              email: t('shareByEmail'),
              whatsapp: t('shareWhatsApp'),
              facebook: t('shareFacebook'),
            }}
            compact
          />
        </div>

        {recipe.story && (
          <div className="max-w-none mb-12 pb-12 border-b border-charcoal/10">
            {recipe.story.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-charcoal/80 leading-relaxed text-lg mb-5">
                {para}
              </p>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 pb-2 border-b border-charcoal/15">
              {t('ingredients')}
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-charcoal/80">
                  <span className="text-terracotta mt-1 shrink-0">•</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>

            {/* Marcel tip in sidebar */}
            {recipe.marcelTip && (
              <div className="mt-8">
                <Marcel type={recipe.marcelType ?? 'cooking'} text={recipe.marcelTip} />
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 pb-2 border-b border-charcoal/15">
              {t('instructions')}
            </h2>
            <ol className="space-y-6">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-heading text-2xl font-bold text-terracotta/40 shrink-0 w-8 text-right leading-tight">
                    {i + 1}
                  </span>
                  <p className="font-body text-charcoal/80 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            {/* Notes */}
            {recipe.notes && recipe.notes.length > 0 && (
              <div className="mt-10 pt-8 border-t border-charcoal/10">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-5">Notes</h3>
                <ul className="space-y-4">
                  {recipe.notes.map((note, i) => (
                    <li key={i} className="font-body text-sm text-charcoal/70 leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Embedded video if available */}
            {recipe.videoId && (
              <div className="mt-10">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">Watch it being made</h3>
                <div className="relative aspect-video rounded-sm overflow-hidden bg-charcoal">
                  <iframe
                    src={`https://www.youtube.com/embed/${recipe.videoId}`}
                    title={`How to make ${recipe.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Like */}
        <div className="mt-8 pt-6 border-t border-charcoal/10">
          <LikeButton contentType="recipe" contentSlug={recipe.slug} />
        </div>

        {/* Tools used */}
        {recipe.toolIds && recipe.toolIds.length > 0 && (
          <RecipeTools toolIds={recipe.toolIds} />
        )}

        {/* Share */}
        <ShareButtons
          title={recipe.title}
          path={`/${locale}/recipes/${recipe.slug}`}
          labels={{
            share: t('share'),
            copyLink: t('copyLink'),
            copied: t('copied'),
            email: t('shareByEmail'),
            whatsapp: t('shareWhatsApp'),
            facebook: t('shareFacebook'),
          }}
        />

        {/* Comments */}
        <Comments contentType="recipe" contentSlug={recipe.slug} />
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-12">
        <NewsletterSignup
          title="More recipes from Provence"
          description="Get new recipes and countryside stories straight to your inbox."
          compact
        />
      </div>
    </>
  );
}
