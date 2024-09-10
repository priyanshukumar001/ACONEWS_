import express from 'express';
import { BASE_URL, Temp } from '../config/constants.js';
import dotenv from 'dotenv';
dotenv.config();

const news = express.Router();


// Fetch news articles
news.post('/', async (req, res) => {
    try {
        const { q, category, lang, country, max, sortby } = req.body;
        console.log(q, category, lang, country, max, sortby);
        const response = await fetch(`${BASE_URL}/search?${new URLSearchParams({
            q: q || 'TOP AND HEADLINES',
            category: category || 'general',
            lang: lang || 'en',
            country: country || 'us',
            max: max || 100,
            sortby: sortby || 'publishedAt',
            apikey: process.env.API_KEY,
        })}`);

        const data = await response.json();
        res.json(data);
        // console.log(data);
        // res.json(Temp?.savedArticles);
        // console.log(Temp?.savedArticles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});

export default news;