// pages/api/auth/callback.js

import { getAccessToken } from '../../../lib/auth';

export default async function handler(req, res) {
    const { code } = req.query;

    try {
        const tokenData = await getAccessToken(code);
        const accessToken = tokenData.access_token;

        // Store the access token as needed (e.g., in session, cookies, etc.)
        // For simplicity, we can use a cookie (you can implement this using a library like `cookie`)

        res.setHeader('Set-Cookie', `access_token=${accessToken}; HttpOnly; Path=/;`);
        
        // Redirect to your main page or another route
        res.redirect('/');
    } catch (error) {
        console.error('Error retrieving access token:', error);
        res.status(500).send('Authentication failed');
    }
}
