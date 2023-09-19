import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => (
  <div className="video-container">
    {videos?.map((item, idx) => (
      <div
        className="container"
        key={idx}
        style={{
          display: `${
            item.id.videoId ? "bloack" : item.id.channelId ? "bloack" : "none"
          }`,
        }}
      >
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channel={item} />}
      </div>
    ))}
  </div>
);

export default Videos;
