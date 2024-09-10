import express from 'express';
import newsRoutes from './api/newsRoute.js';
import paginationRoutes from './api/paginationRoute.js';
import searchRoutes from './api/searchRoute.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

//Middleware to handle cors error
app.use(cors({
    origin: 'http://localhost:1234', // Your frontend's origin //need to be updated
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Routes
app.use('/api/news', newsRoutes);
app.use('/api/pagination', paginationRoutes);
app.use('/api/search', searchRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});