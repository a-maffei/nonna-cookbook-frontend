import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const showNavbar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="navbar">
      <div className="navbar-alwayson">
        <NavLink to="/">
          <h1 className="navbar-title">Nonna's Cookbook</h1>
        </NavLink>
        <div className="mobile-bttn-cont" onClick={showNavbar}>
          {" "}
          {isClicked ? (
            <button className="nav-bttn">
              <FaTimes />
            </button>
          ) : (
            <button className="nav-bttn">
              <FaBars />
            </button>
          )}
        </div>
      </div>
      <div className={isClicked ? "navbar-links  visible-nav" : "navbar-links"}>
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Homepage
        </NavLink>
        <NavLink
          to="/starters"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Starters
        </NavLink>
        <NavLink
          to="/pasta"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Pasta
        </NavLink>
        <NavLink
          to="/dessert"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Dessert
        </NavLink>
        <NavLink
          to="/form"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          UPLOAD
        </NavLink>
      </div>
    </nav>
  );
}
