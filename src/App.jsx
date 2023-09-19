import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Feed, SearchFeed, ChannelDetail, VideoDetail } from "./pages";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
      <Route path="/channel/:channelId" element={<ChannelDetail />} />
      <Route path="/video/:videoId" element={<VideoDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
