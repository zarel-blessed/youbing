import { useNavigate, useParams } from "react-router-dom";
import { dataFetcher } from "../utils/dataFetcher";
import { useEffect, useState } from "react";
import "../stylesheets/ChannelDetail.css";
import { ChannelCard, Sidebar, Videos } from "../components";

const ChannelDetail = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  const { channelId } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (selectedCategory !== "") navigate(`/search/${selectedCategory}`);
  }, [selectedCategory]);

  useEffect(() => {
    dataFetcher(
      `channels?part=snippet,statistics,brandSettings&id=${channelId}`
    )
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((err) => console.log("error: ", err));

    dataFetcher(`search?channelId=${channelId}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((err) => console.log("error: ", err));
  }, [channelId]);

  return (
    <div className="channel-detail">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onChannelPage
      />
      <div className="channel-page">
        <div className="channel-info">
          <ChannelCard channel={channelDetail} />
          <div className="about-channel">
            <h2
              style={{
                color: "#fa8314",
                marginBottom: "0.5em",
              }}
            >
              About
            </h2>
            <p>{channelDetail?.snippet?.description}</p>
          </div>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
