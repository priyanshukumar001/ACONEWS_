import Search from "./Search";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <><nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">ACONEWS</Link>
            </div>
        </nav>
            <Search />
        </>
    )
}

export default Navigation;