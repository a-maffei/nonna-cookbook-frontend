import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./recipe.css";

export default function Startersrecipe({ starters }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const oneStarter = starters.find((starter) => starter.fields.nameId === id);

  console.log(oneStarter);
  return (
    <>
      <div className="recipe">
        <h1 className="recipe-title">
          {oneStarter.fields.title}
          {oneStarter.fields.vegetarian ? (
            <span className="recipe-vegetarian">(V)</span>
          ) : (
            ""
          )}{" "}
        </h1>
        <img
          src={oneStarter.fields.image.fields.file.url}
          style={{ width: "400px" }}
          alt={oneStarter.fields.title}
          className="recipe-image"
        />
        <h3 className="main-title">Ingredients</h3>
        <ReactMarkdown className="recipe-text">
          {oneStarter.fields.ingredients}
        </ReactMarkdown>
        <br />
        <h3 className="main-title">Instructions</h3>
        <ReactMarkdown className="recipe-text">
          {oneStarter.fields.instructions}
        </ReactMarkdown>
      </div>
      <div className="bttn-container">
        <h4 className="bttn-intro">Not quite what you were looking for?</h4>
        <button className="nav-bttn" onClick={() => navigate("/starters")}>
          Go back to all starters
        </button>
      </div>
    </>
  );
}
