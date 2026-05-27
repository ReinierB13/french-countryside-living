import { MetadataRoute } from 'next'
import { articles, recipes } from '@/lib/content'
import { supabase } from '@/lib/supabase'
import { routing } from '@/i18n/routing'

const BASE = 'https://www.french-countryside-living.com'

function url(locale: string, path: string): string {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
  return `${BASE}${prefix}${path}`
}

const staticPages = [
  '/',
  '/about',
  '/articles',
  '/contact',
  '/france',
  '/potager',
  '/provence',
  '/provence/lavender',
  '/provence/markets',
  '/recipes',
  '/tools',
  '/videos',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { locales } = routing
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const path of staticPages) {
    for (const locale of locales) {
      entries.push({ url: url(locale, path) })
    }
  }

  // Article pages (exclude hidden)
  for (const article of articles.filter(a => !a.hidden)) {
    for (const locale of locales) {
      entries.push({
        url: url(locale, `/articles/${article.slug}`),
        lastModified: new Date(article.date),
      })
    }
  }

  // Recipe pages
  for (const recipe of recipes) {
    for (const locale of locales) {
      entries.push({
        url: url(locale, `/recipes/${recipe.slug}`),
        lastModified: new Date(recipe.date),
      })
    }
  }

  // Market pages from Supabase
  try {
    const { data: markets } = await supabase.from('markets').select('id')
    for (const market of markets ?? []) {
      for (const locale of locales) {
        entries.push({ url: url(locale, `/provence/markets/${market.id}`) })
      }
    }
  } catch {
    // Supabase unavailable at build time — market detail pages omitted
  }

  return entries
}
