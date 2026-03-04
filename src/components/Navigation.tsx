'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    { href: `/${locale}/articles`, label: t('articles') },
    { href: `/${locale}/videos`, label: t('videos') },
    { href: `/${locale}/recipes`, label: t('recipes') },
    { href: `/${locale}/france`, label: t('france') },
    { href: `/${locale}/provence`, label: t('provence') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const localizedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <nav className="bg-olive text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            href={`/${locale}`}
            className="font-heading font-bold text-lg md:text-xl text-parchment hover:text-amber transition-colors shrink-0"
          >
            French Countryside Living
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm px-3 py-2 rounded-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-amber font-semibold'
                    : 'text-parchment/85 hover:text-amber'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language switcher */}
            <div className="ml-3 pl-3 border-l border-olive-light flex items-center">
              <span className="text-parchment/50 text-xs font-body uppercase">{locale}</span>
              <span className="text-parchment/30 mx-1">/</span>
              <Link
                href={localizedPath}
                className="text-parchment/50 hover:text-amber text-xs font-body uppercase transition-colors"
              >
                {otherLocale}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-parchment p-2 rounded-sm hover:bg-olive-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-olive-light">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-body py-2.5 px-2 border-b border-olive-light/50 transition-colors ${
                  isActive(link.href)
                    ? 'text-amber font-semibold'
                    : 'text-parchment/90 hover:text-amber'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex gap-3">
              <Link
                href={localizedPath}
                className="text-parchment/60 hover:text-amber text-sm font-body uppercase transition-colors"
              >
                {otherLocale === 'fr' ? 'Français' : 'English'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
