import { useParams, useNavigate } from "react-router-dom";
import { useFeed, useSearch } from "../../config/globalVariable";
import formatDate from "../../config/formatDate";
import "../../public/static/css/DetailedContents.css"
import BackButton from "./BackButton";


const DetailedContent = ({ type }) => {
    const [feed, setFeed] = useFeed();
    const [searched, setSearched] = useSearch();
    let contents = type === '/' ? feed : searched;
    const { id } = useParams();
    const navigate = useNavigate();

    contents = contents && contents[id];

    // console.log(contents);
    if (!contents) {
        return (
            <div className="error-message-container">
                <div className="error-message">
                    <h2>Oops! Something went wrong.</h2>
                    <p>We couldn't find the article you're looking for. Please try again later or select a different article.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="news-detail-container">
            <div className="news-detail">
                <BackButton />
                <img className="news-image" src={contents?.image} alt={contents?.title} />
                <div className="news-content">
                    <h1 className="news-title">{contents?.title}</h1>
                    <p className="news-description">{contents?.description}</p>
                    <p className="news-date">Published on: {formatDate(contents?.publishedAt)}</p>
                    <p className="news-source">Source: <a href={contents?.source?.url} target="_blank" rel="noopener noreferrer">{contents?.source?.name}</a></p>
                    <p className="news-full-content">{contents?.content}</p>
                    <a className="news-link" href={contents?.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        </div>
    );

}

export default DetailedContent;