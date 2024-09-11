import express from 'express';
import { BASE_URL, Temp } from '../config/constants.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();


// Search news articles with various options
router.post('/', async (req, res) => {
    console.log("searched");
    try {
        const { q, category, lang = 'en', country = 'us', max = 100, from, to, sortby } = req.body;
        console.log(q, category, lang, country, from, to, sortby);
        const response = await fetch(`${BASE_URL}/search?${new URLSearchParams({
            q: q,
            category: category || '',
            lang: lang,
            country: country,
            max: max,
            from: from || '',
            to: to || '',
            sortby: sortby || 'publishedAt',
            apikey: process.env.API_KEY,
        })}`);

        if (!response.ok) {
            res.json(response);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
        // console.log(data);
        console.log("Searched Item sent");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});

export default router;