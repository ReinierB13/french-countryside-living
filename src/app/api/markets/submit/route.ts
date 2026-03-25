import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const TYPES = ['food', 'brocante', 'crafts', 'mixed'];
const SEASONALITIES = ['year_round', 'summer', 'seasonal'];

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    name, village, department, day_of_week, market_type,
    seasonality, postcode, mairie_url, notes,
    submitter_name, submitter_email,
  } = body;

  // Validate required fields
  if (!name?.trim() || !village?.trim() || !department?.trim()) {
    return NextResponse.json({ error: 'Name, village, and department are required.' }, { status: 400 });
  }
  if (!DAYS.includes(day_of_week)) {
    return NextResponse.json({ error: 'Invalid day of week.' }, { status: 400 });
  }
  if (!Array.isArray(market_type) || market_type.length === 0 || !market_type.every((t: string) => TYPES.includes(t))) {
    return NextResponse.json({ error: 'At least one valid market type is required.' }, { status: 400 });
  }
  if (!SEASONALITIES.includes(seasonality)) {
    return NextResponse.json({ error: 'Invalid seasonality.' }, { status: 400 });
  }

  // Geocode the village using Nominatim (OpenStreetMap) — free, no API key
  let lat = 43.8;
  let lng = 5.4;
  try {
    // Use postcode if provided — unambiguous. Fall back to village + department + bounding box.
    const PROVENCE_BBOX = '4.5,43.0,7.2,44.5';
    const query = postcode?.trim()
      ? `${postcode.trim()}, France`
      : [village.trim(), department.trim(), 'France'].join(', ');
    const bbox = postcode?.trim() ? '' : `&viewbox=${PROVENCE_BBOX}&bounded=1`;
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=fr${bbox}`,
      { headers: { 'User-Agent': 'FrenchCountrysideLiving/1.0 (french_countryside_living@outlook.com)' } }
    );
    const geoData = await geoRes.json();
    if (geoData.length > 0) {
      lat = parseFloat(geoData[0].lat);
      lng = parseFloat(geoData[0].lon);
    }
  } catch (geoErr) {
    console.error('Geocoding failed, using placeholder coordinates:', geoErr);
  }

  // Use service role key so RLS doesn't block the insert
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error: dbError } = await supabaseAdmin.from('markets').insert({
    name: name.trim(),
    village: village.trim(),
    department: department.trim(),
    day_of_week,
    market_type,
    seasonality,
    postcode: postcode?.trim() || null,
    mairie_url: mairie_url?.trim() || null,
    notes: notes?.trim() || null,
    lat,
    lng,
    confirmed: false,
  });

  if (dbError) {
    console.error('Market submission DB error:', dbError.message);
    return NextResponse.json({ error: 'Failed to save submission.' }, { status: 500 });
  }

  // Email notification to admin
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'French Countryside Living <onboarding@resend.dev>',
      to: 'french_countryside_living@outlook.com',
      replyTo: submitter_email || undefined,
      subject: `New market submission: ${name.trim()} — ${village.trim()}`,
      text: [
        `New market submitted for review:`,
        ``,
        `Market: ${name.trim()}`,
        `Village: ${village.trim()}`,
        `Department: ${department.trim()}`,
        `Day: ${day_of_week}`,
        `Type: ${market_type.join(', ')}`,
        `Seasonality: ${seasonality}`,
        `Postcode: ${postcode || '—'}`,
        `Website: ${mairie_url || '—'}`,
        `Notes: ${notes || '—'}`,
        ``,
        `Submitted by: ${submitter_name || 'Anonymous'}`,
        `Email: ${submitter_email || '—'}`,
        ``,
        `Review and confirm in your Supabase dashboard.`,
      ].join('\n'),
    });
  } catch (emailErr) {
    // Non-fatal — submission is saved, email is best-effort
    console.error('Market submission email error:', emailErr);
  }

  return NextResponse.json({ success: true });
}
