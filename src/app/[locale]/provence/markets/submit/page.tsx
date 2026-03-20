'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DEPARTMENTS = [
  'Bouches-du-Rhône',
  'Var',
  'Vaucluse',
  'Alpes-de-Haute-Provence',
  'Drôme Provençale',
  'Gard',
  'Hérault',
  'Other',
];
const MARKET_TYPES = [
  { value: 'food', label: 'Food & Produce' },
  { value: 'brocante', label: 'Brocante & Antiques' },
  { value: 'crafts', label: 'Crafts & Artisan' },
  { value: 'mixed', label: 'Mixed' },
];
const SEASONALITIES = [
  { value: 'year_round', label: 'Year-round' },
  { value: 'summer', label: 'Summer only (June–September)' },
  { value: 'seasonal', label: 'Seasonal (specify in notes)' },
];

export default function SubmitMarketPage() {
  const params = useParams();
  const locale = params.locale as string;

  const [form, setForm] = useState({
    name: '',
    village: '',
    department: '',
    day_of_week: '',
    market_type: [] as string[],
    seasonality: '',
    postcode: '',
    mairie_url: '',
    notes: '',
    submitter_name: '',
    submitter_email: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleTypeToggle(type: string) {
    setForm(prev => ({
      ...prev,
      market_type: prev.market_type.includes(type)
        ? prev.market_type.filter(t => t !== type)
        : [...prev.market_type, type],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/markets/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-parchment px-4">
        <div className="max-w-lg text-center">
          <div className="text-5xl mb-6">🛒</div>
          <h1 className="font-heading text-3xl font-bold text-charcoal mb-4">Thank you!</h1>
          <p className="font-body text-charcoal/70 leading-relaxed mb-8">
            Your market has been submitted and will appear on the map once we have reviewed it.
            We check submissions regularly and will add confirmed markets within a few days.
          </p>
          <Link
            href={`/${locale}/provence/markets`}
            className="inline-block bg-terracotta text-white font-heading font-semibold px-6 py-3 rounded-sm hover:bg-terracotta/90 transition-colors"
          >
            ← Back to the market map
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-parchment min-h-screen">
      {/* Header */}
      <div className="bg-charcoal text-parchment px-4 sm:px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <Link
            href={`/${locale}/provence/markets`}
            className="text-parchment/50 hover:text-parchment text-sm font-body transition-colors mb-4 inline-block"
          >
            ← Back to market map
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-parchment mb-3">
            Submit Your Local Market
          </h1>
          <p className="font-body text-parchment/65 leading-relaxed">
            Know a market that isn't on the map? Tell us about it. We review every submission
            and add confirmed markets within a few days.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Market details */}
          <section>
            <h2 className="font-heading text-lg font-bold text-charcoal mb-5 pb-2 border-b border-charcoal/15">
              About the market
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Market name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Marché de Saint-Rémy-de-Provence"
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                    Village / Town <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={form.village}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Saint-Rémy-de-Provence"
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                  />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={form.postcode}
                    onChange={handleChange}
                    placeholder="e.g. 13210"
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Department <span className="text-terracotta">*</span>
                </label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                >
                  <option value="">Select a department</option>
                  {DEPARTMENTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Schedule */}
          <section>
            <h2 className="font-heading text-lg font-bold text-charcoal mb-5 pb-2 border-b border-charcoal/15">
              Schedule
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Day of week <span className="text-terracotta">*</span>
                </label>
                <select
                  name="day_of_week"
                  value={form.day_of_week}
                  onChange={handleChange}
                  required
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                >
                  <option value="">Select a day</option>
                  {DAYS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-2">
                  Seasonality <span className="text-terracotta">*</span>
                </label>
                <div className="space-y-2">
                  {SEASONALITIES.map(s => (
                    <label key={s.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="seasonality"
                        value={s.value}
                        checked={form.seasonality === s.value}
                        onChange={handleChange}
                        required
                        className="accent-terracotta"
                      />
                      <span className="font-body text-sm text-charcoal">{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Market type */}
          <section>
            <h2 className="font-heading text-lg font-bold text-charcoal mb-5 pb-2 border-b border-charcoal/15">
              Market type <span className="text-terracotta">*</span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {MARKET_TYPES.map(t => (
                <label key={t.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.market_type.includes(t.value)}
                    onChange={() => handleTypeToggle(t.value)}
                    className="accent-terracotta w-4 h-4"
                  />
                  <span className="font-body text-sm text-charcoal">{t.label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Extra details */}
          <section>
            <h2 className="font-heading text-lg font-bold text-charcoal mb-5 pb-2 border-b border-charcoal/15">
              Extra details
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Market or mairie website
                </label>
                <input
                  type="url"
                  name="mairie_url"
                  value={form.mairie_url}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                />
              </div>

              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Opening times, location within the village, what's sold, anything useful..."
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta resize-none"
                />
              </div>
            </div>
          </section>

          {/* About you */}
          <section>
            <h2 className="font-heading text-lg font-bold text-charcoal mb-1 pb-2 border-b border-charcoal/15">
              About you
            </h2>
            <p className="font-body text-xs text-charcoal/50 mb-5">
              Optional — only used if we need to follow up on the submission.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  name="submitter_name"
                  value={form.submitter_name}
                  onChange={handleChange}
                  placeholder="Marie"
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label className="block font-heading text-sm font-semibold text-charcoal mb-1.5">
                  Your email
                </label>
                <input
                  type="email"
                  name="submitter_email"
                  value={form.submitter_email}
                  onChange={handleChange}
                  placeholder="marie@example.com"
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-terracotta"
                />
              </div>
            </div>
          </section>

          {/* Error */}
          {status === 'error' && (
            <p className="font-body text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
              {errorMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting' || form.market_type.length === 0}
            className="w-full bg-terracotta text-white font-heading font-semibold px-6 py-3.5 rounded-sm hover:bg-terracotta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit market for review'}
          </button>
        </form>
      </div>
    </div>
  );
}
