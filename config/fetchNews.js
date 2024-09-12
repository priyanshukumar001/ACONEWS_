import dotenv from 'dotenv';
dotenv.config();


const BASE_URL = process.env.BASE_URL;

const fetchNews = async (type, params, setArticles) => {

    const subRoot = (type === 'trends') ? "news" : "search";

    // console.log(params);
    try {
        const response = await fetch(`${BASE_URL}/api/${subRoot}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data.articles);
        setArticles(data.articles);
    } catch (error) {
        setArticles(undefined);
        console.error('Error fetching data:', error);
    }
};

export default fetchNews;