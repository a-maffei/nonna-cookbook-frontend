import React from "react";
import { Link } from "react-router-dom";
import "./category.css";
import Cloth from "../images/tablecloth.jpg";
import { useNavigate } from "react-router-dom";

export default function Pasta({ pasta }) {
  const navigate = useNavigate();
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${Cloth})`, backgroundRepeat: "repeat" }}
    >
      {" "}
      <div className="category-macro-container">
        {" "}
        <h2 className="category-title">Pasta</h2>
        <p>
          Nonna says your friends will love you even more if you cook them one
          of these.
        </p>
        <div className="category-container">
          {pasta &&
            pasta.map((recipe, key) => (
              <div className="category-recipe-container" key={key}>
                <Link
                  to={`/pasta/${recipe.fields.nameId}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3 className="category-recipe-title">
                    {" "}
                    {recipe.fields.title}{" "}
                  </h3>
                  <div className="category-overlay-cont">
                    <img
                      src={recipe.fields.image.fields.file.url}
                      className="category-recipe-img"
                    />
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
