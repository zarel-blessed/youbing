import { useNavigate } from "react-router-dom";
import { categories } from "../utils/constants";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  onChannelPage = false,
}) => {
  const navigate = useNavigate();

  return (
    <aside>
      {categories.map((category) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            if (onChannelPage) setSelectedCategory(category.name);
            setSelectedCategory(category.name);
          }}
          className="category-btn"
          style={{
            borderColor:
              category.name === selectedCategory ? "#fa8314" : "transparent",
          }}
          key={category.name}
        >
          <span
            className="icon"
            style={{
              color: category.name === selectedCategory ? "#fa8314" : "#888888",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              color: category.name === selectedCategory ? "#e3e3e3" : "#a7a7a7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
