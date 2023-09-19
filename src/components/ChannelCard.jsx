import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channel }) => (
  <div className="channel-card">
    <div className="container">
      <Link className="channel-dp" to={`/channel/${channel?.id?.channelId}`}>
        <img src={`${channel?.snippet?.thumbnails.high.url}`} alt="" />
      </Link>
      <div className="channel-data">
        <Link
          className="channel-name"
          to={`/channel/${channel?.id?.channelId}`}
        >
          <h2
            style={{
              lineHeight: 1.1,
            }}
          >
            {channel?.snippet?.title}
          </h2>
        </Link>
        {channel?.statistics?.subscriberCount && (
          <p>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}
            &nbsp;Subscribers
          </p>
        )}
        <CheckCircleIcon
          fontSize="10px"
          sx={{
            color: "#fa8314",
          }}
        />
      </div>
    </div>
  </div>
);

export default ChannelCard;
