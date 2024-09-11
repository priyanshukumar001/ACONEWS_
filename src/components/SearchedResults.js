import { Outlet } from "react-router-dom";
import { useSearch, useFeed } from "../../config/globalVariable";
import CardSkeletal from "./CardSkeletal";

const SearchedResults = () => {
    const [searched, setSearched] = useSearch();

    // console.log(searched);
    return (searched?.length === 0) ? <CardSkeletal /> : ((searched === undefined) ? (
        <div className="suggestion">
            <h1>No results found!</h1>
            <h2>Discover Search for more.....</h2>
        </div>
    ) : (<div><Outlet /></div>)
    )
}

export default SearchedResults;