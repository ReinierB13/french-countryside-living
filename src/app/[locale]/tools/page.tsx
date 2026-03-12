import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import NewsletterSignup from '@/components/NewsletterSignup';
import { toolSections } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Tools I Use in Provence | French Countryside Living',
  description:
    'The actual gear I use for filming, cooking, hunting, and gardening in Provence - honest recommendations, no fluff. Affiliate links support the channel.',
  openGraph: {
    title: 'Tools I Use in Provence',
    description:
      'The actual gear I use for filming, cooking, hunting, and gardening in Provence - honest recommendations, no fluff.',
    images: [{ url: '/images/french-countryside-banner.jpg' }],
  },
};

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <Hero
        title="Tools I Use in Provence"
        subtitle="Everything on this page is something I actually own and use. Nothing is included because it looks good on a list."
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Provençal countryside"
        height="medium"
        overlay="medium"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <section className="mb-14 max-w-3xl">
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">Gear & Recommendations</p>
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-5">What I Actually Use</h2>
          <div className="prose-countryside">
            <p>
              People ask regularly what camera I use in the field, what knife I cook with, what I carry on a hunt.
              This page is the honest answer to all of those questions - four sections covering the gear that has
              earned a permanent place in my kit.
            </p>
            <p>
              I have not included anything I do not own or have not used repeatedly. If something did not survive
              a Provençal summer or a November hunt, it is not here. If the cheaper version does the same job,
              I use the cheaper version.
            </p>
          </div>
        </section>

        {/* Affiliate disclosure */}
        <div className="mb-14 bg-parchment border border-charcoal/10 px-6 py-5 rounded-sm">
          <p className="font-body text-sm text-charcoal/70 leading-relaxed">
            <span className="font-semibold text-charcoal">Affiliate disclosure:</span> Some links on this page
            are Amazon affiliate links. If you buy something through one of these links, I receive a small
            commission at no extra cost to you. This helps keep the site running. I only recommend things I
            use myself - my opinions are not influenced by commissions.
          </p>
        </div>

        {/* Section nav */}
        <nav className="mb-14 flex flex-wrap gap-3" aria-label="Jump to section">
          {toolSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-4 py-2 border border-charcoal/20 text-charcoal/70 hover:border-olive hover:text-olive transition-colors rounded-sm"
            >
              <span>{section.icon}</span>
              {section.title}
            </a>
          ))}
        </nav>

        {/* Product sections */}
        {toolSections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className={`${sectionIndex < toolSections.length - 1 ? 'mb-20' : ''}`}
          >
            {/* Section header */}
            <div className="mb-8 pb-5 border-b border-charcoal/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="font-heading text-2xl font-bold text-charcoal">{section.title}</h2>
              </div>
              <p className="font-body text-charcoal/70 leading-relaxed max-w-2xl">{section.intro}</p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-charcoal/10 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Product image */}
                  <div className="relative h-48 bg-parchment overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={undefined}
                    />
                  </div>

                  {/* Product content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-semibold text-charcoal text-base mb-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Why I use it */}
                    <div className="bg-parchment border-l-2 border-olive px-4 py-3 mb-5 flex-1">
                      <p className="font-body text-xs font-semibold text-olive uppercase tracking-widest mb-1">
                        Why I use it
                      </p>
                      <p className="font-body text-sm text-charcoal/75 leading-relaxed italic">
                        {product.whyIUseIt}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="block text-center bg-terracotta text-white font-body text-sm font-semibold px-4 py-3 hover:bg-terracotta/85 active:scale-95 transition-all"
                    >
                      View on Amazon France →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to top */}
            <div className="mt-8 text-right">
              <a
                href="#"
                className="font-body text-xs text-charcoal/40 hover:text-olive transition-colors"
              >
                Back to top
              </a>
            </div>
          </section>
        ))}

        {/* Closing note */}
        <section className="mt-16 pt-10 border-t border-charcoal/10">
          <div className="max-w-2xl">
            <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">A Final Note</p>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-4">Buy Less, Buy Better</h2>
            <p className="font-body text-charcoal/70 leading-relaxed">
              The Provençal approach to tools is simple: buy one good thing that will last twenty years rather
              than four cheap things that will not last five. Every item on this page follows that principle.
              Some are expensive. Most are not. All of them earn their place.
            </p>
          </div>
        </section>

      </div>

      <NewsletterSignup />
    </>
  );
}
