import {NavLink} from "react-router-dom"
import "../../styling/navbar.css";

export default function NavBar() {
  return (
    <div id="header-container">
    <NavLink  to="/"> Home </NavLink>
    <NavLink  to="/properties"> Properties </NavLink>
    <NavLink  to="/about"> About </NavLink>
    <NavLink  to="/contacts"> Contact us </NavLink>
    </div>
  )
}
