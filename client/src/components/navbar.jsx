import { NavLink } from "react-router-dom";
import "../../styling/navbar.css";
import logo from "./images/logo.png";
import { CiUser } from "react-icons/ci";

export default function NavBar() {
  return (
    <div id="header-container">
      <img src={logo} alt="Logo" className="logo" />
      <div id="nav-links-container">
        <NavLink className="nav-button" to="/">
          Home
        </NavLink>
        <NavLink className="nav-button" to="/properties">
          Properties
        </NavLink>
        <NavLink className="nav-button" to="/about">
          About
        </NavLink>
        <NavLink className="nav-button" to="/contacts">
          Contact us
        </NavLink>
      </div>
      <CiUser className="profile-icon"/>
    </div>
  );
}
