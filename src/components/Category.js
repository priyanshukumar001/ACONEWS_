import { useState, useEffect } from "react";
import fetchNews from "../../config/fetchNews";
import { useSearch, useLanguage, useCountry } from "../../config/globalVariable";
import '../../public/static/css/CategoryBlocks.css';
import { useNavigate } from "react-router-dom";
import general from '../../public/static/img/general.jpg'
import business from '../../public/static/img/business.jpg'
import entertainment from '../../public/static/img/entertainment.jpg'
import health from '../../public/static/img/health.jpg'
import science from '../../public/static/img/science.jpg'
import sports from '../../public/static/img/sports.jpg'
import nation from '../../public/static/img/nation.jpg'
import world from '../../public/static/img/world.jpg'
import technology from '../../public/static/img/technology.jpg'


const categories = [
    { name: 'General', image: general },
    { name: 'World', image: world },
    { name: 'Nation', image: nation },
    { name: 'Business', image: business },
    { name: 'Technology', image: technology },
    { name: 'Entertainment', image: entertainment },
    { name: 'Sports', image: sports },
    { name: 'Science', image: science },
    { name: 'Health', image: health },
];

const Category = () => {

    const [searched, setSearched] = useSearch();
    const [language, setLanguage] = useLanguage();
    const [country, setCountry] = useCountry();

    const [category, setCategory] = useState('');

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log('Searched content updated:', searched);
    // }, [searched]);

    const handleCategoryClick = async (categoryName) => {
        const updatedCategory = categoryName.toLowerCase();
        setCategory(updatedCategory);
        setSearched([]);

        const params = {
            q: category,
            category: updatedCategory,
            lang: '',
            country: '',
            max: 100,
            from: "",
            to: "",
            sortby: "publishedAt",
        };

        try {
            await fetchNews('search', params, setSearched);
            navigate('/search');
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // setLanguage('');
        // setCountry('');
    };

    return (
        <>
            <div className="category-container">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="category-block"
                        style={{ backgroundImage: `url(${category?.image})` }}
                        onClick={() => handleCategoryClick(category?.name)}
                    >
                        <div className="category-name">{category.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Category;




