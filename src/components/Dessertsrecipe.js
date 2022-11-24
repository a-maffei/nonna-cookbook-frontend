import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./recipe.css";
import Cloth from "../images/tablecloth.jpg";

export default function Dessertsrecipe({ dessert }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const oneDessert = dessert.find((dessert) => dessert.fields.nameId === id);

  console.log(oneDessert);
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Cloth})`,
        backgroundRepeat: "repeat",
        margin: 0,
      }}
    >
      <div className="recipe-macro-container">
        <div className="recipe">
          <h1 className="recipe-title">{oneDessert.fields.title}</h1>
          <img
            src={oneDessert.fields.image.fields.file.url}
            style={{ width: "400px" }}
            alt={oneDessert.fields.title}
            className="recipe-image"
          />
          <h3 className="main-title">Ingredients</h3>
          <ReactMarkdown className="recipe-text">
            {oneDessert.fields.ingredients}
          </ReactMarkdown>
          <br />
          <h3 className="main-title">Instructions</h3>
          <ReactMarkdown className="recipe-text">
            {oneDessert.fields.instructions}
          </ReactMarkdown>
        </div>
        <div className="bttn-container">
          <h4 className="bttn-intro">Not quite what you were looking for?</h4>
          <button className="nav-bttn" onClick={() => navigate("/desserts")}>
            Go back to all desserts
          </button>
        </div>
      </div>
    </div>
  );
}
