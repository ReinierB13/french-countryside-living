import type { Recipe, Article } from '@/types'

export const BASE_URL = 'https://french-countryside-living.com'

const AUTHOR = {
  '@type': 'Person',
  name: 'Reinier Botha',
} as const

const PUBLISHER = {
  '@type': 'Organization',
  name: 'French Countryside Living',
  url: BASE_URL,
  founder: 'Reinier Botha',
} as const

export type BreadcrumbItem = {
  name: string
  item?: string  // omit when no real URL exists for this step
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function pageUrl(locale: string, ...segments: string[]): string {
  const prefix = locale === 'fr' ? '/fr' : ''
  return `${BASE_URL}${prefix}/${segments.join('/')}`
}

// Converts "15 min", "2 hours", "1h 20 min" → ISO 8601 duration.
// Takes the primary time before any "+", so "45 min + 8 hours marinating" → "PT45M".
// Returns undefined for zero or unparseable input.
function toISODuration(str: string): string | undefined {
  if (!str) return undefined
  const primary = str.split('+')[0].trim()
  const hours = parseInt(primary.match(/(\d+)\s*h(?:ours?)?/i)?.[1] ?? '0', 10)
  const minutes = parseInt(primary.match(/(\d+)\s*min(?:utes?)?/i)?.[1] ?? '0', 10)
  if (hours === 0 && minutes === 0) return undefined
  return `PT${hours > 0 ? `${hours}H` : ''}${minutes > 0 ? `${minutes}M` : ''}`
}

function isoToMinutes(iso: string): number {
  const h = parseInt(iso.match(/(\d+)H/)?.[1] ?? '0', 10)
  const m = parseInt(iso.match(/(\d+)M/)?.[1] ?? '0', 10)
  return h * 60 + m
}

function minutesToISO(total: number): string | undefined {
  if (total <= 0) return undefined
  const h = Math.floor(total / 60)
  const m = total % 60
  return `PT${h > 0 ? `${h}H` : ''}${m > 0 ? `${m}M` : ''}`
}

// Removes undefined, null, empty string, and empty array fields from the top level.
function omitEmpty(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (v === undefined || v === null || v === '') return false
      if (Array.isArray(v) && v.length === 0) return false
      return true
    }),
  )
}

function ingredientText(ing: string | { text: string; recipeSlug: string }): string {
  return typeof ing === 'string' ? ing : ing.text
}

// "wild-game" → "Wild Game"
function prettifyCategory(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export function buildRecipeSchema(
  recipe: Recipe,
  slug: string,
  locale: string,
): Record<string, unknown> {
  const url = pageUrl(locale, 'recipes', slug)
  const prepISO = toISODuration(recipe.prepTime)
  const cookISO = toISODuration(recipe.cookTime)
  const totalMin = (prepISO ? isoToMinutes(prepISO) : 0) + (cookISO ? isoToMinutes(cookISO) : 0)

  return omitEmpty({
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.excerpt,
    image: absoluteUrl(recipe.image),
    author: AUTHOR,
    publisher: PUBLISHER,
    datePublished: recipe.date,
    prepTime: prepISO,
    cookTime: cookISO,
    totalTime: minutesToISO(totalMin),
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: prettifyCategory(recipe.category),
    recipeCuisine: 'French',
    recipeIngredient: recipe.ingredients.map(ingredientText),
    recipeInstructions: recipe.instructions.map((step) => ({
      '@type': 'HowToStep',
      text: step,
    })),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  })
}

export function buildArticleSchema(
  article: Article,
  slug: string,
  locale: string,
): Record<string, unknown> {
  const url = pageUrl(locale, 'articles', slug)

  return omitEmpty({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.image),
    author: AUTHOR,
    publisher: PUBLISHER,
    datePublished: article.date,
    keywords: article.tags?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  })
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      ...(crumb.item ? { item: crumb.item } : {}),
    })),
  }
}
