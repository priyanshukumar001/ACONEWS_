import { Outlet } from "react-router-dom";


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