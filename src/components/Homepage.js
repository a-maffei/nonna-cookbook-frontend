import React from "react";
import Starter from "../images/mozzarella.jpg";
import Pasta from "../images/pasta.jpg";
import Dessert from "../images/dessert.jpg";
import { Link } from "react-router-dom";
import "./homepage.css";
import { FaPizzaSlice } from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="homepage">
      <h2 className="main-title">What would you like to cook today?</h2>
      <p className="main-subtitle">
        Browse through Nonna's favorite recipes and get inspired.{" "}
      </p>
      <div className="homepage-pizzas">
        <span className="homepage-icon">
          <FaPizzaSlice className="spinner rotate" />
        </span>
        <span className="homepage-icon">
          <FaPizzaSlice className="spinner rotate" />
        </span>
        <span className="homepage-icon">
          <FaPizzaSlice className="spinner rotate" />
        </span>
      </div>
      <Link to="/starters" style={{ textDecoration: "none" }}>
        <div className="homepage-cat-con">
          <div className="homepage-cat-title-con">
            <h2 className="homepage-cat-title">Starters</h2>
          </div>
          <img
            className="homepage-cat-image"
            src={Starter}
            style={{ width: "100%" }}
          />
        </div>
      </Link>

      <Link to="/pasta" style={{ textDecoration: "none" }}>
        <div className="homepage-cat-con">
          <div className="homepage-cat-title-con">
            <h2 className="homepage-cat-title">Pasta</h2>
          </div>
          <img
            className="homepage-cat-image"
            src={Pasta}
            style={{ width: "100%" }}
          />
        </div>
      </Link>

      <Link to="/dessert" style={{ textDecoration: "none" }}>
        <div className="homepage-cat-con">
          <div className="homepage-cat-title-con">
            <h2 className="homepage-cat-title">Dessert</h2>
          </div>
          <img
            src={Dessert}
            style={{ width: "100%" }}
            className="homepage-cat-image"
          />
        </div>
      </Link>
    </div>
  );
}
