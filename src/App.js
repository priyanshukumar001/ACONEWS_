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
import { useSearch } from "../config/globalVariable";
const App = () => {
    const [searched, setSearched] = useSearch();
    const location = useLocation();
    const hideNavPaths = [/^\/\d+$/, /^\/search\/\d+$/];
    const HideNavigation = hideNavPaths.some((path) => path.test(location.pathname)) && searched && searched.length > 0;

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
