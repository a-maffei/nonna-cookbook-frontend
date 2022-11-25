import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./recipe.css";
import Cloth from "../images/tablecloth.jpg";

export default function Pastarecipe({ pasta }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const onePasta = pasta.find((pasta) => pasta.fields.nameId === id);

  console.log(onePasta);
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
          <h1 className="recipe-title">
            {onePasta.fields.title}
            {onePasta.fields.vegetarian ? (
              <span className="recipe-vegetarian">(V)</span>
            ) : (
              ""
            )}{" "}
          </h1>
          <img
            src={onePasta.fields.image.fields.file.url}
            style={{ width: "400px" }}
            alt={onePasta.fields.title}
            className="recipe-image"
          />
          <h3 className="main-title ingredients">Ingredients</h3>
          <ReactMarkdown className="recipe-text">
            {onePasta.fields.ingredients}
          </ReactMarkdown>
          <br />
          <h3 className="main-title instructions">Instructions</h3>
          <ReactMarkdown className="recipe-text">
            {onePasta.fields.instructions}
          </ReactMarkdown>
        </div>
        <div className="bttn-container">
          <h4 className="bttn-intro">Not quite what you were looking for?</h4>
          <button className="nav-bttn" onClick={() => navigate("/pasta")}>
            Go back to all pastas
          </button>
        </div>
      </div>
    </div>
  );
}
