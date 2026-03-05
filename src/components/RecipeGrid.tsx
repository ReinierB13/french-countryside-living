'use client';

import { useState } from 'react';
import RecipeCard, { categoryConfig } from './RecipeCard';
import type { Recipe } from '@/types';

function getCatMeta(key: string) {
  if (categoryConfig[key]) return categoryConfig[key];
  return { label: key.charAt(0).toUpperCase() + key.slice(1), icon: '🍽', color: '' };
}

export default function RecipeGrid({ recipes, locale }: { recipes: Recipe[]; locale: string }) {
  const [active, setActive] = useState('all');

  // Build unique category list in the order they first appear
  const categories = Array.from(new Set(recipes.map((r) => r.category)));

  const filtered = active === 'all' ? recipes : recipes.filter((r) => r.category === active);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-semibold transition-colors ${
            active === 'all'
              ? 'bg-terracotta text-white'
              : 'bg-white border border-parchment text-charcoal hover:bg-parchment/60'
          }`}
        >
          <span>🍽</span> All Recipes
        </button>

        {categories.map((key) => {
          const meta = getCatMeta(key);
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-semibold transition-colors ${
                active === key
                  ? 'bg-terracotta text-white'
                  : 'bg-white border border-parchment text-charcoal hover:bg-parchment/60'
              }`}
            >
              <span>{meta.icon}</span>
              {meta.label}
            </button>
          );
        })}
      </div>

      {/* Recipe grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="font-body text-charcoal/50 text-lg">No recipes in this category yet.</p>
      )}
    </>
  );
}
