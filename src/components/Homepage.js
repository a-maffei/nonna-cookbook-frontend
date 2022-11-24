import React from "react";
import Starter from "../images/mozzarella.jpg";
import Pasta from "../images/pasta.jpg";
import Dessert from "../images/dessert.jpg";
import Cloth from "../images/tablecloth.jpg";
import { Link } from "react-router-dom";
import "./homepage.css";
import { FaPizzaSlice } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function Homepage({ recipes }) {
  const [inputText, setInputText] = useState("");
  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const inputHandler = (e, query) => {
    e.preventDefault();
    const lowerCase = query.toLowerCase();
    setMatchingRecipes(
      recipes.filter((recipe) =>
        recipe.fields.title.toLowerCase().includes(lowerCase)
      )
    );
    console.log(matchingRecipes);
    setInputText("");
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${Cloth})`, backgroundRepeat: "repeat" }}
    >
      <div className="homepage">
        <h2 className="main-title">What would you like to cook today?</h2>
        <p className="main-subtitle">
          Browse through Nonna's favorite recipes and get inspired.{" "}
        </p>
        <form
          onSubmit={(e) => {
            inputHandler(e, query);
          }}
        >
          <input
            className="homepage-searchbar"
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setQuery(e.target.value);
              return console.log(query);
            }}
          ></input>
          <button className="homepage-button" type="submit">
            Search
          </button>
        </form>
        {inputText.length === 0 ? (
          <div>
            {matchingRecipes.map((recipe) => (
              <Link
                to={`/${recipe.fields.type}/${recipe.fields.nameId}`}
                style={{ textDecoration: "none" }}
              >
                <h1>{recipe.fields.title}</h1>
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
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
        <div className="homepage-all-cat-con">
          <Link to="/starters" style={{ textDecoration: "none" }}>
            <div className="homepage-cat-con">
              <div className="homepage-cat-title-con">
                <h2 className="homepage-cat-title">Starters</h2>
              </div>
              <div className="homepage-overlay">
                <img className="homepage-cat-image" src={Starter} />
                <div className="homepage-cat-overlay">
                  <p className="homepage-overlay-text">
                    Discover Nonna's favorite starters
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/pasta" style={{ textDecoration: "none" }}>
            <div className="homepage-cat-con">
              <div className="homepage-cat-title-con">
                <h2 className="homepage-cat-title">Pasta</h2>
              </div>
              <div className="homepage-overlay">
                <img className="homepage-cat-image" src={Pasta} />
                <div className="homepage-cat-overlay">
                  <p className="homepage-overlay-text">
                    Discover Nonna's favorite pasta dishes
                  </p>
                </div>
              </div>{" "}
            </div>
          </Link>

          <Link to="/desserts" style={{ textDecoration: "none" }}>
            <div className="homepage-cat-con">
              <div className="homepage-cat-title-con">
                <h2 className="homepage-cat-title">Desserts</h2>
              </div>
              <div className="homepage-overlay">
                <img className="homepage-cat-image" src={Dessert} />
                <div className="homepage-cat-overlay">
                  <p className="homepage-overlay-text">
                    Discover Nonna's favorite desserts
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
