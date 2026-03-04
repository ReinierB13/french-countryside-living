'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

export default function NewsletterSignup({
  title = 'Join the Countryside',
  description = 'Stories, recipes, and seasonal updates from rural Provence — delivered to your inbox.',
  compact = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Placeholder: integrate with Mailchimp, ConvertKit, etc.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (compact) {
    return (
      <div className="bg-parchment border border-amber/30 rounded-sm p-6">
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{title}</h3>
        <p className="font-body text-sm text-charcoal/70 mb-4">{description}</p>
        {submitted ? (
          <p className="font-body text-sm text-olive font-semibold">
            ✓ You&apos;re in! Welcome to the countryside.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-3 py-2 text-sm font-body border border-charcoal/20 rounded-sm bg-white focus:outline-none focus:border-olive"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-olive text-parchment px-4 py-2 text-sm font-body font-semibold rounded-sm hover:bg-olive-dark transition-colors disabled:opacity-60"
            >
              {loading ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="bg-olive py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-amber font-heading text-sm uppercase tracking-widest mb-3">
          🐸 Marcel recommends
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-parchment mb-4">{title}</h2>
        <p className="font-body text-parchment/80 text-lg mb-8 leading-relaxed">{description}</p>

        {submitted ? (
          <div className="bg-parchment/10 border border-parchment/30 rounded-sm px-8 py-6">
            <p className="font-heading text-parchment text-xl font-semibold">
              ✓ Welcome to the countryside!
            </p>
            <p className="font-body text-parchment/70 text-sm mt-2">
              Your first letter from Provence is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 font-body text-charcoal border-0 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-terracotta text-white px-6 py-3 font-body font-semibold rounded-sm hover:bg-terracotta-dark transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {loading ? 'Sending...' : 'Subscribe →'}
            </button>
          </form>
        )}
        <p className="font-body text-parchment/50 text-xs mt-4">
          No spam, ever. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
