import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dataFetcher } from "../utils/dataFetcher";
import ReactPlayer from "react-player";
import "../stylesheets/VideoDetail.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos } from "../components";

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const [comments, setComments] = useState([]);

  let noVideos = false;

  const { videoId } = useParams();

  useEffect(() => {
    dataFetcher(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    dataFetcher(`search?part=snippet&relatedToVideoId=${videoId}`)
      .then((data) => setVideos(data.items))
      .catch((err) => {
        console.log(`errorMessage: ${err}`);
        noVideos = true;
      });

    dataFetcher(`commentThreads?part=snippet&videoId=${videoId}`).then((data) =>
      setComments(data.items)
    );
  }, [videoId]);

  if (!videoDetail?.snippet) return "Loading...";

  return (
    <div className="video-details">
      <div className="container">
        <div className="comments">
          {comments?.map((comment, idx) => (
            <div
              className="comment"
              style={{
                display: `${
                  !comment.snippet.topLevelComment.snippet
                    .authorProfileImageUrl && "none"
                }`,
              }}
              key={idx}
            >
              <img
                src={
                  comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl
                }
                alt="user"
              />
              <div className="user-comment">
                <h3>
                  {
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorDisplayName
                  }
                </h3>
                <p>
                  {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                </p>
              </div>
            </div>
          ))}
        </div>
        <section className="video-player-page">
          <div className="player">
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls
            />
          </div>
          <div className="video-info">
            <h2>{videoDetail?.snippet?.title}</h2>
            <Link
              to={`/channel/${videoDetail.snippet?.channelId}`}
              className="channelTitle"
            >
              {videoDetail?.snippet?.channelTitle}
              <CheckCircleIcon
                fontSize="8px"
                sx={{
                  color: "#fa8314",
                }}
              />
            </Link>
            <div className="statistics">
              <div>
                {parseInt(videoDetail?.statistics.viewCount).toLocaleString()}
                &nbsp;&nbsp;<span>Views</span>
              </div>
              <div>
                {parseInt(videoDetail?.statistics.likeCount).toLocaleString()}
                &nbsp;&nbsp;<span>Likes</span>
              </div>
            </div>
          </div>
        </section>
        {!noVideos && <Videos videos={videos} />}
      </div>
    </div>
  );
};

export default VideoDetail;
