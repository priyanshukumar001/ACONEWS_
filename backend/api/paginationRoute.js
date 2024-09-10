import express from 'express';
import { BASE_URL, Temp } from '../config/constants.js';
import dotenv from 'dotenv';
dotenv.config();

const pagination = express.Router();


// Fetch paginated news articles
pagination.post('/', async (req, res) => {
  try {
    const { q, category, lang, country, from, to, max = 100, page = 1, sortby } = req.body;
    console.log(q, category, lang, country, from, to, sortby);
    const response = await fetch(`${BASE_URL}/search?${new URLSearchParams({
      q: q || '',
      category: category || '',
      lang: lang || 'en',
      country: country || 'us',
      page: page,
      max: max,
      from: from || '',
      to: to || '',
      sortby: sortby || 'publishedAt',
      apikey: process.env.API_KEY,
    })}`);

    const data = await response.json();
    // res.json(data);
    const articles = data?.articles;
    const totalResults = articles?.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    const paginatedArticles = articles?.slice((page - 1) * pageSize, page * pageSize);
    res.json({
      totalResults,
      totalPages,
      currentPage: parseInt(page),
      pageSize: parseInt(pageSize),
      articles: paginatedArticles,
    });

    // Temp.savedArticles = { data: "new data" };
    // console.log(Temp.savedArticles);
    // res.json(Temp?.savedArticles);

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }

});

export default pagination;