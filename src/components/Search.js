import React, { useEffect, useState } from 'react';
import { useSearch, useLanguage, useCountry } from "../../config/globalVariable";
import fetchNews from '../../config/fetchNews';
import { useNavigate } from 'react-router-dom';
import '../../public/static/css/Search.css'

const Search = () => {

    //global variables 
    const [searched, setSearched] = useSearch();
    const [language, setLanguage] = useLanguage();
    const [globalCountry, setglobalCountry] = useCountry();

    //variables for handling form data
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [lang, setLang] = useState('');
    const [country, setCountry] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [sortby, setSortby] = useState('publishedAt');

    //for drop down menu
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //for navigation
    const navigate = useNavigate();

    // defining elements of parameters
    const params = {
        q: query,
        category: category,
        lang: lang,
        country: country,
        max: 100,
        from: new Date(from),
        to: new Date(to),
        sortby: sortby,
    };


    const handleSearch = (e) => {
        e.preventDefault();
        fetchNews("search", params, setSearched);
        setLanguage(lang);
        setglobalCountry(country);
        navigate('/search');
    };


    const handleReset = (e) => {
        e.preventDefault();
        setCategory('');
        setLang('');
        setCountry('');
        setFrom('');
        setTo('')
        setSortby('')
    }

    return (
        <div className='search-bar'>

            <form className='search-form' onSubmit={handleSearch}>
                <input
                    className='search-input'
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="want to discover more?....."

                />
                <button className='search-button' type="submit">Search</button>
            </form>

            <div className='filters-dropdown'>
                {!isLargeScreen && (
                    <button className='dropdown-toggle' onClick={toggleDropdown}>
                        {isOpen ? 'Hide Filters ☼' : 'Show Filters ☀'}
                    </button>
                )}

                {(isOpen || isLargeScreen) && (
                    <>
                        {/* <h3>Search By:</h3> */}
                        <div className='filters-box'>

                            <select className='filter' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Category</option>
                                <option value="general">General</option>
                                <option value="world">World</option>
                                <option value="nation">Nation</option>
                                <option value="business">Business</option>
                                <option value="technology">Technology</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="sports">Sports</option>
                                <option value="science">Science</option>
                                <option value="health">Health</option>
                            </select>
                            <select className='filter' value={country} onChange={(e) => setCountry(e.target.value)}>
                                <option value="">Country</option>
                                <option value="au">Australia</option>
                                <option value="br">Brazil</option>
                                <option value="ca">Canada</option>
                                <option value="cn">China</option>
                                <option value="eg">Egypt</option>
                                <option value="fr">France</option>
                                <option value="de">Germany</option>
                                <option value="gr">Greece</option>
                                <option value="hk">Hong Kong</option>
                                <option value="in">India</option>
                                <option value="ie">Ireland</option>
                                <option value="il">Israel</option>
                                <option value="it">Italy</option>
                                <option value="jp">Japan</option>
                                <option value="nl">Netherlands</option>
                                <option value="no">Norway</option>
                                <option value="pk">Pakistan</option>
                                <option value="pe">Peru</option>
                                <option value="ph">Philippines</option>
                                <option value="pt">Portugal</option>
                                <option value="ro">Romania</option>
                                <option value="ru">Russian Federation</option>
                                <option value="sg">Singapore</option>
                                <option value="es">Spain</option>
                                <option value="se">Sweden</option>
                                <option value="ch">Switzerland</option>
                                <option value="tw">Taiwan</option>
                                <option value="ua">Ukraine</option>
                                <option value="gb">United Kingdom</option>
                                <option value="us">United States</option>
                            </select>
                            <select className='filter' value={lang} onChange={(e) => setLang(e.target.value)}>
                                <option value="">Language</option>
                                <option value="ar">Arabic</option>
                                <option value="zh">Chinese</option>
                                <option value="nl">Dutch</option>
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="el">Greek</option>
                                <option value="he">Hebrew</option>
                                <option value="hi">Hindi</option>
                                <option value="it">Italian</option>
                                <option value="ja">Japanese</option>
                                <option value="ml">Malayalam</option>
                                <option value="mr">Marathi</option>
                                <option value="no">Norwegian</option>
                                <option value="pt">Portuguese</option>
                                <option value="ro">Romanian</option>
                                <option value="ru">Russian</option>
                                <option value="es">Spanish</option>
                                <option value="sv">Swedish</option>
                                <option value="ta">Tamil</option>
                                <option value="te">Telugu</option>
                                <option value="uk">Ukrainian</option>
                            </select>
                            <input className='filter' type="text" value={from}
                                placeholder='from'
                                onChange={(e) => setFrom(e.target.value)}
                                onFocus={(e) => e.target.type = "date"}
                                onBlur={(e) => e.target.type = "text"}
                            />
                            <input className='filter' type="text" value={to}
                                placeholder='to'
                                onChange={(e) => setTo(e.target.value)}
                                onFocus={(e) => e.target.type = "date"}
                                onBlur={(e) => e.target.type = "text"}
                            />
                            <select className='filter' value={sortby} onChange={(e) => setSortby(e.target.value)}>
                                <option value="publishedAt">Sort By</option>
                                <option value="publishedAt">Latest</option>
                                <option value="relevance">Most Relevant</option>
                            </select>
                            <button className='search-button' onClick={handleReset}>Reset</button>
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};

export default Search;
