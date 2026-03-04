import Link from 'next/link';
import type { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  locale: string;
}

export default function ArticleCard({ article, locale }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === 'fr' ? 'fr-FR' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <Link href={`/${locale}/articles/${article.slug}`} className="group block">
      <article className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image area */}
        <div
          className="relative h-52 overflow-hidden bg-olive/20"
          style={{
            backgroundImage: `url(${article.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300" />
          {article.category && (
            <span className="absolute top-3 left-3 bg-terracotta text-white text-xs font-heading font-semibold px-3 py-1 rounded-sm uppercase tracking-wide">
              {article.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p className="text-olive text-xs font-body mb-2 uppercase tracking-widest">
            {formattedDate}
          </p>
          <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 group-hover:text-terracotta transition-colors leading-snug">
            {article.title}
          </h3>
          <p className="font-body text-sm text-charcoal/70 leading-relaxed line-clamp-3 flex-1">
            {article.excerpt}
          </p>
          <p className="mt-4 text-terracotta text-sm font-body font-semibold group-hover:underline">
            Read more →
          </p>
        </div>
      </article>
    </Link>
  );
}
