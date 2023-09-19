import { useState, useEffect } from "react";
import { Sidebar, Videos } from "../components";
import "../stylesheets/Feed.css";
import { dataFetcher } from "../utils/dataFetcher";
// import Response from "../utils/response";
import { nav_categories } from "../utils/constants";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    dataFetcher(`search?part=snippet&q=${selectedCategory}`)?.then((data) =>
      setVideos(data.items)?.catch((err) => console.log("error: ", err))
    );
  }, [selectedCategory]);

  // if () return <p>Loading..</p>;

  return (
    <main>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <section className="feed">
        <nav>
          {nav_categories.map((nav_category) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(nav_category);
              }}
              className="nav_category"
              key={nav_category}
            >
              {nav_category}
            </button>
          ))}
        </nav>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default Feed;
