import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Cookbook</h1>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/starters">Starters</NavLink>
      <NavLink to="/pasta">Pasta</NavLink>
      <NavLink to="/desserts">Dessert</NavLink>
    </nav>
  );
}
