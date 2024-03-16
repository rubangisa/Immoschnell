import { NavLink } from "react-router-dom";
import "../../styling/navbar.css";
import logo from  '../assets/logo.png';
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { LoginContext, SearchContext } from "../contexts/AppContext";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const {login, dispatchLogin} = useContext(LoginContext);
  const {dispatchSearch} = useContext(SearchContext)
  const toggleProfile = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSignOut = () => {
    dispatchLogin ({type : "loggedOut"})
  }

  const handlePropertiesReset = () => {
    dispatchSearch({type: "reset"})
  }

  useEffect(() => {
    let timeout;
    if (!menuOpen) {
      timeout = setTimeout(() => {
        setMenuOpen(true);
      }, 1000); 
    }
    return () => clearTimeout(timeout);
  }, [menuOpen]);
  return (
    <div id="header-container">
      <div className="logo-div">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <GiHamburgerMenu
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <div id="nav-links-container">
          <div className="nav-parent">
            <NavLink className="nav-button" to="/">
              Home
            </NavLink>
            <div id="underline-hover"></div>
          </div>
          <div className="nav-parent">
            <NavLink onClick={handlePropertiesReset} className="nav-button" to="/properties">
              Properties
            </NavLink>{" "}
            <div id="underline-hover"></div>
          </div>
          <div className="nav-parent">
            <NavLink className="nav-button" to="/addProperty">
              Add Property
            </NavLink>{" "}
            <div id="underline-hover"></div>
          </div>
          <div className="nav-parent">
            <NavLink className="nav-button" to="/about">
              About
            </NavLink>
            <div id="underline-hover"></div>
          </div>
          <div className="nav-parent">
            <NavLink className="nav-button" to="/contacts">
              Contact us
            </NavLink>
            <div id="underline-hover"></div>
          </div>
        </div>
      </nav>
      <div className="user-name-container">
      <span>{login.loggedIn && login.user.firstName}</span>
      <div className="nav-parent">
        <button id="profile-icon" onClick={toggleProfile}>
          <CiUser className="profile-icon" />
        </button>
      </div>
      </div>
      {profileMenuOpen && (
        <div className="dropdown-menu">
          <div className="nav-parent-profile">
            <NavLink className="profile-button" to="/manage-account">
              Manage Account
              <div id="underline-hover"></div>
            </NavLink>
          </div>
          <div className="nav-parent-profile">
            <NavLink className="profile-button" to="/userDash">
              My Profile
              <div id="underline-hover"></div>
            </NavLink>
          </div>
          <div className="nav-parent-profile">
            <NavLink className="profile-button" to="/my-booking">
              Bookings and Trips
              <div id="underline-hover"></div>
            </NavLink>
          </div>
          <div className="nav-parent-profile">
            <NavLink className="profile-button" to="/wallet-and-rewards">
              Wallet and Rewards
              <div id="underline-hover"></div>
            </NavLink>
          </div>
          <div className="nav-parent-profile">
          {login.loggedIn ? <NavLink className="profile-button" onClick={handleSignOut}>
              Logout
              <div id="underline-hover"></div>
            </NavLink> :
            <NavLink className="profile-button" to="/login">
              Login/Sign Up
              <div id="underline-hover"></div>
            </NavLink> }
          </div>
        </div>
      )}
    </div>
  );
}