import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1 className="navbar-title">Nonna's Cookbook</h1>
      </NavLink>
      <div className="navbar-links">
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
