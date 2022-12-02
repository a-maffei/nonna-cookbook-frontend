import React from "react";
import Starter from "../images/mozzarella.jpg";
import Pasta from "../images/pasta.jpg";
import Dessert from "../images/dessert.jpg";
import Cloth from "../images/tablecloth.jpg";
import { Link } from "react-router-dom";
import "./homepage.css";
import "./category.css";
import { FaPizzaSlice } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function Homepage({ recipes }) {
  const [inputText, setInputText] = useState("");
  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
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
    return setRandomRecipe([]);
  };

  const randomRecipeHandler = () => {
    setRandomRecipe(recipes[Math.floor(Math.random() * 18) + 1]);
    setMatchingRecipes([]);
    return console.log(randomRecipe);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${Cloth})`, backgroundRepeat: "repeat" }}
    >
      <div className="homepage">
        <h2 className="main-title">What would you like to cook today?</h2>
        <p className="main-subtitle">
          We can help you cook all your favorite Italian dishes. <br></br>Search
          through our recipes—or click on Nonna's emoji, and we'll pick a random
          one for you.{" "}
        </p>
        <div className="homepage-browse-container">
          <form
            onSubmit={(e) => {
              inputHandler(e, query);
            }}
          >
            <input
              className="homepage-searchbar"
              type="text"
              value={inputText}
              placeholder="explore our recepies"
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
          <button
            className="homepage-button"
            type="submit"
            onClick={() => {
              randomRecipeHandler();
            }}
          >
            👵
          </button>
        </div>
        {randomRecipe.length !== 0 ? (
          <div className="homepage-results-container">
            <div className="homepage-recipe-container">
              <Link
                to={`/${randomRecipe.fields.type}/${randomRecipe.fields.nameId}`}
                style={{ textDecoration: "none" }}
              >
                <h3 className="homepage-recipe-title">
                  {randomRecipe.fields.title}
                </h3>
                <div className="homepage-recipe-cont">
                  <img
                    src={randomRecipe.fields.image.fields.file.url}
                    className="homepage-recipe-img"
                  />
                  <div className="homepage-recipe-overlay">
                    <p className="homepage-recipe-overlay-text">
                      Discover the recipe
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="homepage-no-results-container"></div>
        )}
        {inputText.length === 0 ? (
          <div className="homepage-results-container">
            {matchingRecipes.map((recipe) => (
              <div className="homepage-recipe-container">
                <Link
                  to={`/${recipe.fields.type}/${recipe.fields.nameId}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3 className="homepage-recipe-title">
                    {recipe.fields.title}
                  </h3>
                  <div className="homepage-recipe-cont">
                    <img
                      src={recipe.fields.image.fields.file.url}
                      className="homepage-recipe-img"
                    />
                    <div className="homepage-recipe-overlay">
                      <p className="homepage-recipe-overlay-text">
                        Discover the recipe
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="homepage-no-results-container"></div>
        )}
        <h2 className="main-title">Nonna's Menu</h2>
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

          <Link to="/dessert" style={{ textDecoration: "none" }}>
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
