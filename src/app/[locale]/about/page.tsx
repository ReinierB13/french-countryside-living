import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Marcel from '@/components/Marcel';
import NewsletterSignup from '@/components/NewsletterSignup';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About',
    description: 'About French Countryside Living — stories from rural Provence.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('AboutPage');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="The Provençal countryside"
        height="medium"
        overlay="medium"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Main about text */}
        <section className="mb-16">
          <div className="prose-countryside">
            <p className="text-xl leading-relaxed text-charcoal/80 italic border-l-4 border-terracotta pl-5 mb-8">
              {t('content')}
            </p>
            <p>
              This site grew from a simple impulse: to document the life that exists here, in the hills and villages of Provence, before it changes or disappears. The hunts at dawn. The long meals that start at noon and end somewhere near sunset. The olive harvest in November with the whole family. The winter truffle markets. The first tomatoes of summer.
            </p>
            <p>
              It is not about a single person. It is about a place — rural southern France — and a way of living that still works. A life close to the land, close to the seasons, close to the fire.
            </p>
            <p>
              The cooking here is not refined cooking. It is peasant cooking in the best sense — honest, generous, and deeply satisfying. Wild boar that has been marinated for two days and cooked for four hours. Lamb chops grilled over wood coals. Tapenade made with olives from the tree in the courtyard. These are not restaurant dishes. They are real food.
            </p>
            <p>
              We also cook South African — the braai, the potjie, the fire cooking traditions that translate perfectly to the Provençal outdoor kitchen. The garrigue makes excellent fire. The wine is better than in the Karoo. The principle is the same: cook outside, cook slowly, cook together.
            </p>
          </div>
        </section>

        {/* Marcel section */}
        <section className="mb-16">
          <div className="section-divider" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">The Mascot</p>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">{t('marcelTitle')}</h2>
              <p className="font-body text-charcoal/75 leading-relaxed">{t('marcelDesc')}</p>
              <p className="font-body text-charcoal/75 leading-relaxed mt-4">
                Marcel is inspired by the great Franco-Belgian comic tradition — Tintin, Astérix — characters with big personalities, dry wit, and an unshakeable confidence in their own way of doing things. He is a small frog with very strong opinions about food, hunting, and the correct way to make tapenade.
              </p>
            </div>
            <div>
              <Marcel
                type="petanque"
                text="A perfect day in Provence: coffee at 7am, hunt from 8am to noon, lunch until 3pm, pétanque until 5pm, aperitif at 6pm, dinner at 8pm. This is not a holiday. This is civilisation."
              />
              <Marcel
                type="gardener"
                text="If your tomatoes taste of nothing, you bought them from a supermarket. Grow your own or find a market farmer. There is no third option."
              />
            </div>
          </div>
        </section>

        {/* What you'll find here */}
        <section className="mb-16">
          <div className="section-divider" />
          <p className="text-olive text-xs font-heading uppercase tracking-widest mb-3">The Site</p>
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">What you&apos;ll find here</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: '📝',
                title: 'Articles',
                desc: 'Stories from the countryside — hunting, the olive harvest, village life, seasonal food, and the slow rhythms of Provence.',
              },
              {
                icon: '🍲',
                title: 'Recipes',
                desc: 'Wild boar daube, potjiekos, braai lamb, tapenade — honest food from field and fire.',
              },
              {
                icon: '▶',
                title: 'Videos',
                desc: 'Watch it all unfold: the hunts, the cooking, the markets, the landscapes. On YouTube and here.',
              },
              {
                icon: '🌿',
                title: 'Provence & France',
                desc: 'Deep dives into the places, traditions, and culture of the South of France.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-parchment rounded-sm p-6">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="font-heading font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <NewsletterSignup />
    </>
  );
}
