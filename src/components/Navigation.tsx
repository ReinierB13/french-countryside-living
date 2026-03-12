'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    { href: '/articles' as const, label: t('articles') },
    { href: '/videos' as const, label: t('videos') },
    { href: '/recipes' as const, label: t('recipes') },
    { href: '/france' as const, label: t('france') },
    { href: '/provence' as const, label: t('provence') },
    { href: '/potager' as const, label: t('potager') },
    { href: '/tools' as const, label: t('tools') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const otherLocale = (locale === 'en' ? 'fr' : 'en') as 'en' | 'fr';

  return (
    <nav className="bg-olive text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-32">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-4 shrink-0 group"
          >
            <Image
              src="/icons/Logo1.png"
              alt="French Countryside Living"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="font-heading font-bold text-2xl md:text-3xl text-parchment group-hover:text-amber transition-colors">
              French Countryside Living
            </span>
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
              <Link
                href={pathname}
                locale={otherLocale}
                className="text-parchment/60 hover:text-amber text-xs font-body font-semibold uppercase tracking-widest transition-colors border border-parchment/20 hover:border-amber/50 px-2 py-1 rounded-sm"
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
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
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
            <div className="pt-3">
              <Link
                href={pathname}
                locale={otherLocale}
                className="inline-block text-parchment/60 hover:text-amber text-sm font-body font-semibold uppercase tracking-widest transition-colors border border-parchment/20 hover:border-amber/50 px-3 py-1.5 rounded-sm"
              >
                {otherLocale === 'fr' ? 'FR - Français' : 'EN - English'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
