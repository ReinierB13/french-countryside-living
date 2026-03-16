// app/api/subscribe/route.js
// Newsletter subscription API route for french-countryside-living.com
// Adds a subscriber email to the Brevo contact list.
// Required env vars: BREVO_API_KEY, BREVO_LIST_ID

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 204) {
      return Response.json({ success: true });
    }

    const error = await response.json();
    return Response.json({ error: error.message }, { status: 500 });

  } catch (err) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
