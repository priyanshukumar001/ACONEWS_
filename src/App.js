import React from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import Navigation from "./components/Navigation";
import SearchedResults from "./components/SearchedResults";
import NewsFeed from "./components/NewsFeed";
import Category from "./components/Category";
import DetailedContent from "./components/DetailedContent";
import Cards from "./components/Cards";
import ScrollToTop from "../config/ScrollToTop";
import { useSearch, useFeed } from "../config/globalVariable";


const App = () => {
    const [feed, setFeed] = useFeed();
    const [searched, setSearched] = useSearch();
    const location = useLocation();

    let HideNavigation = false;
    const isFeedPath = location.pathname.match(/^\/\d+$/) && feed?.length > 0;
    const isSearchPath = location.pathname.match(/^\/search\/\d+$/) && searched?.length > 0;

    if (isFeedPath || isSearchPath) {
        HideNavigation = true;
    }

    return (
        <>
            <div>
                <ScrollToTop />
                {!HideNavigation && <Navigation />}
                <Outlet />
                <Category />
            </div>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Body />,
                children: [
                    {
                        path: "",
                        element: <NewsFeed />,
                        children: [
                            {
                                path: "",
                                element: <Cards type="/" />,
                            },
                            {
                                path: ":id",
                                element: <DetailedContent type="/" />,
                            },
                        ],
                    },
                    {
                        path: "search",
                        element: <SearchedResults />,
                        children: [
                            {
                                path: "",
                                element: <Cards type="/search" />,
                            },
                            {
                                path: ":id",
                                element: <DetailedContent type="/search" />,
                            },
                        ],
                    },

                ],
            },
        ],
    },
    {
        errorElement: <ErrorPage />,
    },
]);
export default appRouter;
