import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/content';

type Props = { locale: string; currentSlug?: string; compact?: boolean };

export default function LatestArticlesSidebar({ locale, currentSlug, compact = false }: Props) {
  const isFr = locale === 'fr';
  const published = articles
    .filter(article => !('hidden' in article && article.hidden) && article.slug !== currentSlug)
    .sort((a, b) => b.date.localeCompare(a.date));
  const featured = published.find(article => article.slug === 'hunting-season-safety-france');
  const latest = published.filter(article => article.slug !== featured?.slug).slice(0, compact ? 3 : 4);
  const items = featured ? [featured, ...latest] : latest;

  return (
    <aside aria-label={isFr ? 'Articles à découvrir' : 'Discover more articles'} className="rounded-sm border border-olive/20 bg-white p-5 shadow-sm">
      <h2 className="font-heading text-xl font-bold text-charcoal">
        {isFr ? 'À découvrir en Provence' : 'Discover more of Provence'}
      </h2>
      <p className="mt-1 font-body text-sm text-charcoal/60">
        {isFr ? 'Histoires, traditions et conseils locaux' : 'Local stories, traditions and practical advice'}
      </p>
      <div className="mt-5 space-y-4">
        {items.map(article => (
          <Link key={article.slug} href={`/${locale}/articles/${article.slug}`} className="group flex items-start gap-3">
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-sm bg-olive/10">
              <Image src={article.image} alt="" fill sizes="80px" className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="min-w-0">
              {article.slug === featured?.slug && (
                <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-terracotta">
                  {isFr ? 'À la une' : 'Featured'}
                </span>
              )}
              <h3 className="font-heading text-sm font-semibold leading-snug text-charcoal group-hover:text-terracotta">
                {isFr ? article.fr?.title || article.title : article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <Link href={`/${locale}/articles`} className="mt-5 inline-block font-body text-sm font-semibold text-terracotta hover:underline">
        {isFr ? 'Tous les articles →' : 'Browse all articles →'}
      </Link>
    </aside>
  );
}
