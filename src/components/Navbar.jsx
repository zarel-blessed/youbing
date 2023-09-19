import { Link } from "react-router-dom";
import logo from "../assets/youbing-logo.png";
import { Searchbar } from "./";
import "../stylesheets/Navbar.css";

const Navbar = () => (
  <header>
    <Link className="logo" to="/">
      <img src={logo} alt="logo" height={30} />
      <span>YouBing</span>
    </Link>
    <Searchbar />
  </header>
);

export default Navbar;
