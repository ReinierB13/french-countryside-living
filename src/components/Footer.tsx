import Link from 'next/link';
import NewsletterSignup from './NewsletterSignup';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  const exploreLinks = [
    { href: `/${locale}/articles`, label: 'Articles' },
    { href: `/${locale}/recipes`, label: 'Recipes' },
    { href: `/${locale}/videos`, label: 'Videos' },
    { href: `/${locale}/provence`, label: 'Provence' },
    { href: `/${locale}/france`, label: 'France' },
  ];

  const siteLinks = [
    { href: `/${locale}/about`, label: 'About' },
    { href: `/${locale}/contact`, label: 'Contact' },
  ];

  return (
    <footer>
      {/* Newsletter strip */}
      <NewsletterSignup
        title="Join the Countryside"
        description="Stories, recipes, and seasonal updates from rural Provence — delivered to your inbox."
      />

      {/* Main footer */}
      <div className="bg-charcoal text-parchment/80 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="font-heading text-xl font-bold text-parchment hover:text-amber transition-colors">
              French Countryside Living
            </Link>
            <p className="font-body text-sm text-parchment/60 mt-3 leading-relaxed max-w-sm">
              Hunting, cooking, and life in rural Provence — stories from the South of France.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.youtube.com/@christophereinier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment/60 hover:text-amber transition-colors font-body text-sm"
                aria-label="YouTube Channel"
              >
                ▶ YouTube
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-parchment uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-parchment/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-parchment uppercase tracking-widest mb-4">
              Site
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-parchment/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={locale === 'en' ? '/fr' : '/'}
                  className="font-body text-sm text-parchment/60 hover:text-amber transition-colors"
                >
                  {locale === 'en' ? 'Français' : 'English'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-parchment/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-parchment/40">
            © {year} French Countryside Living. All rights reserved.
          </p>
          <p className="font-body text-xs text-parchment/40">
            Made with love in Provence 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}
