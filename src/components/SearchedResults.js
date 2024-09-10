import { Outlet } from "react-router-dom";
import { useSearch, useFeed } from "../../config/globalVariable";


const SearchedResults = () => {
    const [searched, setSearched] = useSearch();

    console.log(searched);
    return (searched === undefined || searched === "" || (searched && searched.length == 0)) ? (
        <div className="suggestion">
            <h1>No results found!</h1>
            <h2>Discover Search for more.....</h2>

        </div>
    ) :

        (<div>
            <Outlet />
        </div>
        )
}

export default SearchedResults;