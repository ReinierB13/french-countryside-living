import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../globals.css';

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
    default: 'French Countryside Living — Hunting, Cooking & Life in Rural Provence',
  },
  description:
    'Stories, recipes, and life from the Provençal countryside — wild boar hunting, fire cooking, village life, and the slow rhythm of rural France.',
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
    icon: '/icon.ico',
    shortcut: '/icon.ico',
  },
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
      <body className="bg-parchment min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
