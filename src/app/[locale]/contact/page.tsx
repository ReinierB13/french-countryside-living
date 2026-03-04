import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact',
    description: 'Get in touch with French Countryside Living.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('ContactPage');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Provence countryside"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Write to us</p>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Get in touch</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">
                {t('followUs')}
              </p>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-5">Find us online</h2>
              <div className="space-y-4">
                <a
                  href="https://www.youtube.com/@christophereinier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-parchment rounded-sm p-4 hover:border-terracotta transition-colors group"
                >
                  <span className="text-2xl">▶</span>
                  <div>
                    <p className="font-heading font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                      YouTube Channel
                    </p>
                    <p className="font-body text-xs text-charcoal/50">@christophereinier</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-parchment border border-amber/20 rounded-sm p-6">
              <p className="font-heading text-sm font-semibold text-charcoal mb-2">📍 Based in</p>
              <p className="font-body text-charcoal/70 text-sm leading-relaxed">
                Les Alpilles region<br />
                Provence, South of France
              </p>
              <p className="font-body text-charcoal/50 text-xs mt-3 italic">
                Out in the field most mornings. We&apos;ll get back to you when we return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
