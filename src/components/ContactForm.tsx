'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-olive/10 border border-olive/30 rounded-sm p-8 text-center">
        <p className="text-3xl mb-3">🐸</p>
        <p className="font-heading text-xl font-semibold text-charcoal mb-2">Message received!</p>
        <p className="font-body text-charcoal/70 text-sm">
          Thank you - we&apos;ll get back to you when we return from the field.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 font-body text-sm text-charcoal border border-charcoal/20 rounded-sm bg-white focus:outline-none focus:border-olive transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-body text-sm font-semibold text-charcoal/70 mb-1.5">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Jean-Pierre"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-sm font-semibold text-charcoal/70 mb-1.5">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="hello@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-semibold text-charcoal/70 mb-1.5">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your question, recipe request, or just say hello..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="font-body text-sm text-terracotta border border-terracotta/30 bg-terracotta/5 rounded-sm px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-olive text-white font-body font-semibold py-3 rounded-sm hover:bg-olive-dark transition-colors disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send message →'}
      </button>
    </form>
  );
}
