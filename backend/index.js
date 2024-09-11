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


const allowedOrigins = [
    'https://aconews-a4671.web.app',
    'http://localhost:1234',
];

app.use(cors({
    origin: function (origin, callback) {
        try {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        } catch (error) {
            console.error('Error in CORS origin function:', error);
            callback(new Error('Internal Server Error'));
        }
    },
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