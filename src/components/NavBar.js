import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active-link" exact>
        Home
      </NavLink>
      <NavLink to="/directors" className="nav-link" activeClassName="active-link">
        Directors
      </NavLink>
      <NavLink to="/actors" className="nav-link" activeClassName="active-link">
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;

