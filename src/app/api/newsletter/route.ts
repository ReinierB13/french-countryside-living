import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email?.trim()) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: 'French Countryside Living <onboarding@resend.dev>',
    to: 'french_countryside_living@outlook.com',
    subject: `New newsletter subscriber: ${email}`,
    text: `A new visitor has subscribed to the French Countryside Living newsletter.\n\nEmail: ${email}\n\nAdd this address to your mailing list.`,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
