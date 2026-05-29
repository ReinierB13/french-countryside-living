import Link from 'next/link';

export type BreadcrumbEntry = {
  name: string
  href?: string  // omit for the current (last) page
}

interface BreadcrumbProps {
  items: BreadcrumbEntry[]
  floating?: boolean
}

export default function Breadcrumb({ items, floating = false }: BreadcrumbProps) {
  const ol = (
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-body text-sm">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-x-1.5">
          {i > 0 && <span aria-hidden="true" className="text-charcoal/30">›</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="text-charcoal/50 hover:text-terracotta transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-charcoal/80 font-medium" aria-current="page">
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ol>
  )

  if (floating) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="inline-flex bg-parchment/95 shadow-md rounded-sm px-4 py-2.5 -mt-5 relative z-10"
        >
          {ol}
        </nav>
      </div>
    )
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-parchment border-b border-charcoal/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
        {ol}
      </div>
    </nav>
  )
}
