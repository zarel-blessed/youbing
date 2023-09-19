import { useState, useEffect } from "react";
import { Videos } from "../components";
import { dataFetcher } from "../utils/dataFetcher";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    dataFetcher(`search?part=snippet&q=${searchTerm}`)?.then((data) =>
      setVideos(data.items)?.catch((err) => console.log("error: ", err))
    );
  }, [searchTerm]);

  return (
    <section className="search-feed feed">
      <Videos videos={videos} />
    </section>
  );
};

export default SearchFeed;
