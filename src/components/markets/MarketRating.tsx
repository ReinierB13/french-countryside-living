'use client';

import { useState, useEffect } from 'react';

const STAR_PATH =
  'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z';

function StarIcon({ filled, large }: { filled: boolean; large?: boolean }) {
  return (
    <svg
      className={large ? 'w-8 h-8' : 'w-5 h-5'}
      fill={filled ? '#C56A3D' : 'none'}
      stroke="#C56A3D"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={STAR_PATH} />
    </svg>
  );
}

interface Props {
  marketId: string;
}

export default function MarketRating({ marketId }: Props) {
  const [avg, setAvg] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(0);
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/markets/ratings?market_id=${encodeURIComponent(marketId)}`)
      .then((r) => r.json())
      .then((data) => {
        setAvg(data.avg ?? 0);
        setCount(data.count ?? 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [marketId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      setError('Please select a star rating.');
      return;
    }
    setSubmitting(true);
    setError('');

    const res = await fetch('/api/markets/ratings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ market_id: marketId, rating: selected, name, honeypot }),
    });

    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
      const newCount = count + 1;
      setCount(newCount);
      setAvg(Math.round(((avg * count + selected) / newCount) * 10) / 10);
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="mt-10 pt-8 border-t border-charcoal/10">
      <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Ratings</h2>

      {!loading && count > 0 && (
        <div className="flex items-center gap-4 mb-8 p-5 bg-parchment">
          <span className="font-heading text-4xl font-bold text-charcoal">{avg.toFixed(1)}</span>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} filled={s <= Math.round(avg)} />
              ))}
            </div>
            <p className="font-body text-xs text-charcoal/50">
              {count} {count === 1 ? 'rating' : 'ratings'}
            </p>
          </div>
        </div>
      )}

      {submitted ? (
        <div className="bg-olive/10 border border-olive/20 p-5">
          <p className="font-heading font-semibold text-olive mb-1">Thank you for your rating!</p>
          <p className="font-body text-sm text-charcoal/70">Your rating has been recorded.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-charcoal">Rate this market</h3>

          <div
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
          >
            <input
              name="website"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setSelected(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="p-1 transition-transform hover:scale-110"
                aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
              >
                <StarIcon filled={star <= (hover || selected)} large />
              </button>
            ))}
          </div>

          <div>
            <label
              className="block font-body text-sm font-medium text-charcoal/70 mb-1"
              htmlFor="rating-name"
            >
              Name <span className="text-terracotta">*</span>
            </label>
            <input
              id="rating-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={80}
              className="w-full sm:w-72 border border-charcoal/20 bg-white font-body text-sm text-charcoal px-4 py-2.5 focus:outline-none focus:border-olive transition-colors"
              placeholder="Your name"
            />
          </div>

          {error && <p className="font-body text-sm text-terracotta">{error}</p>}

          <button
            type="submit"
            disabled={submitting || !selected}
            className="bg-olive text-white font-body text-sm font-medium px-6 py-3 hover:bg-olive/85 active:scale-95 transition-all disabled:opacity-60"
          >
            {submitting ? 'Saving...' : 'Submit rating'}
          </button>
        </form>
      )}
    </div>
  );
}
