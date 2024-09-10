import { Link, useNavigate } from "react-router-dom";
import { useFeed, useSearch } from "../../config/globalVariable";
import '../../public/static/css/Card.css'
import formatDate from "../../config/formatDate";
import { useState, useEffect } from "react";



const Cards = ({ type }) => {

    //for changing values
    const [feed, setFeed] = useFeed();
    const [searched, setSearched] = useSearch();
    const [articles, setArticles] = useState([]);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState(1);

    //for navigation
    const navigate = useNavigate();

    //for pagination
    const contents = type === '/' ? feed : searched;
    const articlesPerPage = screenSize < 768 ? 5 : 10;
    const totalPages = Math.ceil(contents?.length / articlesPerPage);

    //updatinge articles to render
    useEffect(() => {
        setArticles(contents);
    }, [contents]);

    //defualt page on window size change
    useEffect(() => {
        setCurrentPage(1);
    }, [screenSize]);

    //for managing window size change
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //next page button
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo(0, 0);
    };


    //prev page button
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, 0);
    };


    //getting particular page articles to render
    const getCurrentPageArticles = () => {
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        return articles?.slice(startIndex, endIndex);
    };

    return (
        <div className="card-space">
            {getCurrentPageArticles()?.map((article, index) => (
                <div className="cards" key={index} onClick={() => navigate(`${type === '/' ? '' : '/search'}/${index}`)}>
                    <img className="card-img" src={article?.image} alt={article?.title} />
                    <div className="card-texts">
                        <h2 className="card-title">{article?.title}</h2>
                        <h4 className="card-description">{article?.description}</h4>
                        <div className="mini-texts">
                            <p className="card-source">{article?.source?.name}</p>
                            <p className="card-time">{formatDate(article?.publishedAt)}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="page-container">
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
                <div className="page-number">
                    <span>Page {currentPage} of {totalPages}</span>
                </div>
            </div>
        </div>
    );
};

export default Cards;