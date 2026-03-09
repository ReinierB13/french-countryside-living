import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// GET /api/comments?slug=xxx&type=article
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const type = searchParams.get('type');

  if (!slug || !type) {
    return NextResponse.json({ error: 'Missing slug or type' }, { status: 400 });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('comments')
    .select('id, name, message, created_at')
    .eq('content_slug', slug)
    .eq('content_type', type)
    .eq('approved', true)
    .order('created_at', { ascending: true });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/comments
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message, content_type, content_slug } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !content_type || !content_slug) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (message.length > 1000) {
    return NextResponse.json({ error: 'Message too long' }, { status: 400 });
  }

  const supabase = getSupabase();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await supabase.from('comments').insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
    content_type,
    content_slug,
    approved: false,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }

  // Notify site owner via email
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'french_countryside_living@outlook.com',
    subject: `New comment on ${content_type}: ${content_slug}`,
    text: `New comment awaiting approval on your site.\n\nFrom: ${name} (${email})\nOn: ${content_type} — ${content_slug}\n\nMessage:\n${message}\n\nApprove it in your Supabase dashboard:\nhttps://supabase.com/dashboard`,
  });

  return NextResponse.json({ success: true });
}
