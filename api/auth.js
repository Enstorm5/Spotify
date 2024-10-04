import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;
  const scope = 'user-read-playback-state user-modify-playback-state';
  
  const authURL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${encodeURIComponent(scope)}`;
  
  return NextResponse.redirect(authURL);
};
