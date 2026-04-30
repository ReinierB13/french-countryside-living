import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// GET /api/markets/ratings?market_id=xxx
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const market_id = searchParams.get('market_id');

  if (!market_id) {
    return NextResponse.json({ error: 'Missing market_id' }, { status: 400 });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('market_ratings')
    .select('rating')
    .eq('market_id', market_id);

  if (error) return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });

  const count = data?.length ?? 0;
  const avg = count > 0 ? data!.reduce((sum, r) => sum + r.rating, 0) / count : 0;

  return NextResponse.json({ avg: Math.round(avg * 10) / 10, count });
}

// POST /api/markets/ratings
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { market_id, rating, name, honeypot } = body;

  if (honeypot) return NextResponse.json({ success: true });

  if (!market_id || !name?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const ratingNum = Number(rating);
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
  }

  const supabase = getSupabase();
  const { error } = await supabase.from('market_ratings').insert({
    market_id,
    rating: ratingNum,
    name: name.trim(),
  });

  if (error) return NextResponse.json({ error: 'Failed to save rating' }, { status: 500 });
  return NextResponse.json({ success: true });
}
