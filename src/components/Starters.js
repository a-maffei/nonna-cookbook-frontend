import React from "react";
import { Link } from "react-router-dom";
import Startersrecipe from "./Startersrecipe";
import "./category.css";
import { useNavigate } from "react-router-dom";

export default function Starters({ starters }) {
  console.log(starters);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="category-title">Starters</h2>
      <p>Blababla.</p>
      <div className="category-container">
        {starters &&
          starters.map((recipe, key) => (
            <div className="category-recipe-container">
              <Link
                to={`/starters/${recipe.fields.nameId}`}
                style={{ textDecoration: "none" }}
              >
                <h3 className="category-recipe-title">
                  {" "}
                  {recipe.fields.title}{" "}
                </h3>

                <img
                  src={recipe.fields.image.fields.file.url}
                  className="category-recipe-img"
                />
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
  );
}
