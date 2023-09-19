import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <div className="video-card">
    <Link className="thumbnail" to={videoId && `/video/${videoId}`}>
      <img src={`${snippet?.thumbnails.high.url}`} alt="" />
    </Link>
    <div className="video-data">
      <Link className="title" to={videoId && `/video/${videoId}`}>
        <p className="video-title">{snippet?.title.slice(0, 60)}</p>
      </Link>
      <Link
        className="channel-name"
        to={snippet?.channelId && `/channel/${snippet?.channelId}`}
      >
        <p className="channel-name">{snippet?.channelTitle}</p>
        <CheckCircleIcon
          fontSize="10px"
          sx={{
            color: "#fa8314",
          }}
        />
      </Link>
    </div>
  </div>
);

export default VideoCard;
