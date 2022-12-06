import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const { snippet, id } = channel;
  console.log(snippet);
  return (
    <Link to="/channel/:channelId" className="channel-card-container card">
      <div className="thumbnail-container">
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.channelTitle}
        />
      </div>
      <div className="channel-details-container">
        <h3 className="channel-title">{snippet?.channelTitle} <FaCheckCircle /></h3>
        {/* <p>{snippet?.description}</p> */}
      </div>
    </Link>
  );
};

export default ChannelCard;
