import Link from 'next/link';
import type { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
  locale: string;
}

const categoryColors: Record<string, string> = {
  'wild-game': 'bg-charcoal text-parchment',
  braai: 'bg-terracotta text-white',
  provencal: 'bg-olive text-white',
  potjie: 'bg-amber text-charcoal',
};

const categoryLabels: Record<string, string> = {
  'wild-game': 'Wild Game',
  braai: 'Braai & Fire',
  provencal: 'Provençal',
  potjie: 'Potjiekos',
};

export default function RecipeCard({ recipe, locale }: RecipeCardProps) {
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
          <span
            className={`absolute top-3 left-3 text-xs font-heading font-semibold px-3 py-1 rounded-sm uppercase tracking-wide ${categoryColors[recipe.category]}`}
          >
            {categoryLabels[recipe.category]}
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
