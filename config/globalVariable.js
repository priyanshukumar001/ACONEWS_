import { createContext, useContext, useState } from "react";

const SearchResults = createContext();

const Search = ({ children }) => {
    const [searched, setSearched] = useState([]);
    return (
        <SearchResults.Provider value={[searched, setSearched]}>
            {children}
        </SearchResults.Provider>
    );
}

const useSearch = () => useContext(SearchResults);


//for Newsfeed
const NewsFeed = createContext();

const Feed = ({ children }) => {
    const [feed, setFeed] = useState([]);
    return (
        <NewsFeed.Provider value={[feed, setFeed]}>
            {children}
        </NewsFeed.Provider>
    );
}

const useFeed = () => useContext(NewsFeed);

//for language set

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => useContext(LanguageContext);

//for country set
const CountryContext = createContext();

const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState('');
    return (
        <CountryContext.Provider value={[country, setCountry]}>
            {children}
        </CountryContext.Provider>
    );
};

const useCountry = () => useContext(CountryContext);


const AppProviders = ({ children }) => {
    return (
        <Search>
            <Feed>
                <LanguageProvider>
                    <CountryProvider>
                        {children}
                    </CountryProvider>
                </LanguageProvider>
            </Feed>
        </Search>
    );
};

export { AppProviders, useSearch, useFeed, useLanguage, useCountry };