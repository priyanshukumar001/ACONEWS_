import { Outlet } from "react-router-dom";
import CardSkeletal from "./CardSkeletal";


const Body = () => {
    return (
        <>
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}

export default Body;