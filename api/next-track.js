const axios = require('axios');

export default async function handler(req, res) {
  const spotifyAccessToken = process.env.SPOTIFY_ACCESS_TOKEN;
  const nextTrackUrl = 'https://api.spotify.com/v1/me/player/next';

  try {
    await axios.post(nextTrackUrl, {}, {
      headers: {
        'Authorization': `Bearer ${spotifyAccessToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).json({ message: 'Next track played' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to skip track' });
  }
}
