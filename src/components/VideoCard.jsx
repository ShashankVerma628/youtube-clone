import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { snippet, id } = video;
  console.log(snippet);
  return (
    <Link to="/video/:videoId" className="video-card-container">
      <div className="thumbnail-container">
        <img src={snippet?.thumbnails?.medium?.url} alt={id?.videoId} />
      </div>
      <div className="video-details-container">
        <h3 className="video-title">
          {snippet?.title}
          <span className="video-details">
            {/* view details set later */}
            <span className="pulished-at">{snippet?.publishTime}</span>
          </span>
        </h3>
        <p className="description">{snippet?.description}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
