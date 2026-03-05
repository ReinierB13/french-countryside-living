'use client';

import { useState } from 'react';
import RecipeCard from './RecipeCard';
import type { Recipe } from '@/types';

const filters = [
  { key: 'all', label: 'All Recipes', icon: '🍽' },
  { key: 'wild-game', label: 'Wild Game', icon: '🎯' },
  { key: 'braai', label: 'Braai & Fire', icon: '🔥' },
  { key: 'potjie', label: 'Potjiekos', icon: '🫕' },
  { key: 'provencal', label: 'Provençal', icon: '🫒' },
];

export default function RecipeGrid({ recipes, locale }: { recipes: Recipe[]; locale: string }) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? recipes : recipes.filter((r) => r.category === active);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-semibold transition-colors ${
              active === f.key
                ? 'bg-terracotta text-white'
                : 'bg-white border border-parchment text-charcoal hover:bg-parchment/60'
            }`}
          >
            <span>{f.icon}</span>
            {f.label}
          </button>
        ))}
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
