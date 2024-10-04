const axios = require('axios');

export default async function handler(req, res) {
  const spotifyAccessToken = process.env.SPOTIFY_ACCESS_TOKEN;
  const playPauseUrl = 'https://api.spotify.com/v1/me/player/play';

  try {
    await axios.post(playPauseUrl, {}, {
      headers: {
        'Authorization': `Bearer ${spotifyAccessToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to control Spotify' });
  }
}
