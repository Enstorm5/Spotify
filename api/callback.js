import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } = process.env;

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: SPOTIFY_REDIRECT_URI
    })
  });

  const tokenData = await tokenResponse.json();

  // Store the access token and refresh token as needed
  console.log('Access Token:', tokenData.access_token);
  console.log('Refresh Token:', tokenData.refresh_token);

  // Redirect the user or return a response
  return NextResponse.redirect('https://spotify-1gwf9ha5a-enstorm5s-projects.vercel.app/success'); // Change this to your success URL
};
