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
      {/* Category dropdown */}
      <div className="flex items-center gap-3 mb-10">
        <label htmlFor="recipe-category" className="font-heading font-semibold text-charcoal text-sm uppercase tracking-widest">
          Categories
        </label>
        <select
          id="recipe-category"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="font-body text-sm text-charcoal bg-white border border-parchment px-4 py-2 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-terracotta cursor-pointer"
        >
          <option value="all">🍽 All Recipes</option>
          {categories.map((key) => {
            const meta = getCatMeta(key);
            return (
              <option key={key} value={key}>
                {meta.icon} {meta.label}
              </option>
            );
          })}
        </select>
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
