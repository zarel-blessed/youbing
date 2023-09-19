import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="search-field"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm) {
          navigate(`/search/${searchTerm}`);
          setSearchTerm("");
        }
        // console.log(searchTerm);
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon sx={{ color: "#777" }} />
    </form>
  );
};

export default Searchbar;
