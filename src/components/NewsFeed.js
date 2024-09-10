import { useEffect } from "react";
import fetchNews from "../../config/fetchNews";
import { useFeed, useLanguage, useCountry } from "../../config/globalVariable";
import Cards from "./Cards";
import { Outlet } from "react-router-dom";

const NewsFeed = () => {

    const [feed, setFeed] = useFeed();
    const [language, setLanguage] = useLanguage();
    const [country, setCountry] = useCountry();

    const params = {
        q: "top AND recent",
        category: "general",
        lang: language,
        country: country,
        max: 100,
        from: "",
        to: "",
        sortby: "publishedAt",
    };

    useEffect(() => {
        fetchNews("trends", params, setFeed);
        // console.log(feed);
    }, [])

    if (feed.length === 0) {
        return (
            <div className="error-message-container">
                <div className="error-message">
                    <h2>Oops! Something went wrong.</h2>
                    <p>Please Check Your Connection.</p>
                </div>
            </div>
        );
    }


    return (
        <>
            <Outlet />
        </>
    )
};

export default NewsFeed;