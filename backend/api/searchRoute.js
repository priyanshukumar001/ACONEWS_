import express from 'express';
import { BASE_URL, Temp } from '../config/constants.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();


// Search news articles with various options
router.post('/', async (req, res) => {
    console.log("searched");
    try {
        const { q, category, lang, country, max = 100, from, to, sortby } = req.body;
        console.log(q, category, lang, country, from, to, sortby);
        const response = await fetch(`${BASE_URL}/search?${new URLSearchParams({
            q: q || category,
            category: category || '',
            lang: lang || 'en',
            country: country || 'us',
            max: max || 100,
            from: from || '',
            to: to || '',
            sortby: sortby || 'publishedAt',
            apikey: process.env.API_KEY,
        })}`);

        const data = await response.json();
        // Temp.savedArticles = { data: "new data" };
        // console.log(Temp.savedArticles);
        res.json(data);
        // res.json(Temp?.savedArticles);
        console.log(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});

export default router;