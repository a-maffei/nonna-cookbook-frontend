import React from "react";
import { Link } from "react-router-dom";
import Startersrecipe from "./Startersrecipe";
import Cloth from "../images/tablecloth.jpg";
import "./category.css";
import { useNavigate } from "react-router-dom";

export default function Starters({ starters }) {
  console.log(starters);
  const navigate = useNavigate();

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${Cloth})`, backgroundRepeat: "repeat" }}
    >
      {" "}
      <div className="category-macro-container">
        <h2 className="category-title">Starters</h2>
        <p className="category-subtitle">
          Nonna says you'll be needing a lot of cooking oil.
        </p>
        <div className="category-container">
          {starters &&
            starters.map((recipe, key) => (
              <div className="category-recipe-container" key={key}>
                <Link
                  to={`/starters/${recipe.nameid}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3 className="category-recipe-title"> {recipe.title} </h3>
                  <div className="category-overlay-cont">
                    <img src={recipe.image} className="category-recipe-img" />
                    <div className="category-overlay">
                      <p className="category-overlay-text">
                        Discover the recipe
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="bttn-container">
          <h4 className="bttn-intro">Not quite what you were looking for?</h4>
          <button className="nav-bttn" onClick={() => navigate("/")}>
            Go back to all recipes
          </button>
        </div>
      </div>
    </div>
  );
}
