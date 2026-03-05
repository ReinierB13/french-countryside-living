import Link from 'next/link';
import type { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
  locale: string;
}

export const categoryConfig: Record<string, { label: string; color: string; icon: string }> = {
  'wild-game': { label: 'Wild Game',   color: 'bg-charcoal text-parchment', icon: '🎯' },
  braai:       { label: 'Braai & Fire', color: 'bg-terracotta text-white',  icon: '🔥' },
  provencal:   { label: 'Provençal',   color: 'bg-olive text-white',        icon: '🫒' },
  potjie:      { label: 'Potjiekos',   color: 'bg-amber text-charcoal',     icon: '🫕' },
  fish:        { label: 'Fish',        color: 'bg-sky-700 text-white',       icon: '🐟' },
  apero:       { label: 'Apéro',       color: 'bg-rose-600 text-white',      icon: '🥂' },
};

const fallback = { label: '', color: 'bg-parchment text-charcoal', icon: '🍽' };

function getCat(category: string) {
  if (categoryConfig[category]) return categoryConfig[category];
  // Unknown category: capitalise and use fallback colours
  return { ...fallback, label: category.charAt(0).toUpperCase() + category.slice(1) };
}

export default function RecipeCard({ recipe, locale }: RecipeCardProps) {
  const cat = getCat(recipe.category);

  return (
    <Link href={`/${locale}/recipes/${recipe.slug}`} className="group block">
      <article className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div
          className="relative h-52 overflow-hidden bg-amber/20"
          style={{
            backgroundImage: `url(${recipe.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300" />
          <span className={`absolute top-3 left-3 text-xs font-heading font-semibold px-3 py-1 rounded-sm uppercase tracking-wide ${cat.color}`}>
            {cat.label}
          </span>
          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-body px-2 py-1 rounded-sm">
            Serves {recipe.servings}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex gap-4 text-xs text-charcoal/50 font-body mb-3">
            <span>⏱ Prep: {recipe.prepTime}</span>
            <span>🔥 Cook: {recipe.cookTime}</span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors leading-snug">
            {recipe.title}
          </h3>
          <p className="font-body text-sm text-charcoal/70 leading-relaxed line-clamp-3 flex-1">
            {recipe.excerpt}
          </p>
          <p className="mt-4 text-terracotta text-sm font-body font-semibold group-hover:underline">
            Get the recipe →
          </p>
        </div>
      </article>
    </Link>
  );
}
