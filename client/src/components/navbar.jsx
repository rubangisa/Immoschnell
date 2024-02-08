import {NavLink} from "react-dom"

export default function NavBar() {
  return (
    <div id="header-container">
    <NavLink className="nav-btn" to="/"> Home </NavLink>
    <NavLink className="nav-btn" to="/properties"> Properties </NavLink>
    <NavLink className="nav-btn" to="/about"> About </NavLink>
    <NavLink className="nav-btn" to="/contacts"> Contact us </NavLink>
    </div>
  )
}
