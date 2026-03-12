import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// GET /api/likes?slug=xxx&type=article
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const type = searchParams.get('type');

  if (!slug || !type) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const supabase = getSupabase();
  const { count, error } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('content_slug', slug)
    .eq('content_type', type);

  if (error) return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  return NextResponse.json({ count: count ?? 0 });
}

// POST /api/likes  — body: { slug, type, fingerprint, action: 'like' | 'unlike' }
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { slug, type, fingerprint, action } = body;

  if (!slug || !type || !fingerprint || fingerprint.length > 64) {
    return NextResponse.json({ error: 'Missing or invalid params' }, { status: 400 });
  }

  const supabase = getSupabase();

  if (action === 'unlike') {
    await supabase
      .from('likes')
      .delete()
      .eq('content_slug', slug)
      .eq('content_type', type)
      .eq('fingerprint', fingerprint);
  } else {
    await supabase
      .from('likes')
      .upsert(
        { content_slug: slug, content_type: type, fingerprint },
        { onConflict: 'content_type,content_slug,fingerprint', ignoreDuplicates: true }
      );
  }

  const { count } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('content_slug', slug)
    .eq('content_type', type);

  return NextResponse.json({ count: count ?? 0 });
}
