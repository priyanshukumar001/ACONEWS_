import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="back-button" onClick={() => navigate(-1)}>&lt;</button>

        </>
    );
}

export default BackButton;