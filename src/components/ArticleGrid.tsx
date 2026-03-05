'use client';

import { useState } from 'react';
import ArticleCard from './ArticleCard';
import type { Article } from '@/types';

export default function ArticleGrid({ articles, locale, defaultCategory = 'all' }: { articles: Article[]; locale: string; defaultCategory?: string }) {
  const [active, setActive] = useState(defaultCategory);

  const categories = Array.from(new Set(articles.map((a) => a.category).filter(Boolean)));

  const filtered = active === 'all' ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Category dropdown */}
      <div className="flex items-center gap-3 mb-10">
        <label htmlFor="article-category" className="font-heading font-semibold text-charcoal text-sm uppercase tracking-widest">
          Categories
        </label>
        <select
          id="article-category"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="font-body text-sm text-charcoal bg-white border border-parchment px-4 py-2 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-terracotta cursor-pointer"
        >
          <option value="all">📰 All Articles</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Article grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="font-body text-charcoal/50 text-lg">No articles in this category yet.</p>
      )}
    </>
  );
}
