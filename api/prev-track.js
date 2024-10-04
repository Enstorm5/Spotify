const axios = require('axios');

export default async function handler(req, res) {
  const spotifyAccessToken = process.env.SPOTIFY_ACCESS_TOKEN;
  const prevTrackUrl = 'https://api.spotify.com/v1/me/player/previous';

  try {
    await axios.post(prevTrackUrl, {}, {
      headers: {
        'Authorization': `Bearer ${spotifyAccessToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).json({ message: 'Previous track played' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to play previous track' });
  }
}
