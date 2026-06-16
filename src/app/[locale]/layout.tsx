import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/schema';
import '../globals.css';

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'French Countryside Living',
  url: BASE_URL,
  founder: 'Reinier Botha',
} as const;

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | French Countryside Living',
    default: 'French Countryside Living - Exploring Provence through food, history and local traditions',
  },
  description:
    'Exploring Provence through food, history and local traditions - from someone who lives here.',
  keywords: [
    'Provence',
    'French countryside',
    'hunting France',
    'wild boar recipe',
    'Provençal cooking',
    'Les Alpilles',
    'rural France',
    'potjiekos',
    'braai',
    'sanglier',
  ],
  icons: {
    icon: [
      { url: '/images/browser_logo.PNG', type: 'image/png' },
    ],
    apple: [
      { url: '/images/browser_logo.PNG', type: 'image/png' },
    ],
    shortcut: '/images/browser_logo.PNG',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'French Countryside Living',
  },
  formatDetection: { telephone: false },
  openGraph: {
    siteName: 'French Countryside Living',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/french-countryside-banner.jpg' }],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${lora.variable}`}>
      <head>
        <meta name="theme-color" content="#556B2F" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <JsonLd data={ORGANIZATION_SCHEMA} />
      </head>
      <body className="bg-parchment min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
