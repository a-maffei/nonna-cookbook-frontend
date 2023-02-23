import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Cloth from "../images/tablecloth.jpg";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import "./recipe.css";

export default function Startersrecipe({ starters }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const oneStarter = starters.find((starter) => starter.nameid === id);

  console.log(oneStarter);
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
            {oneStarter.title}
            {oneStarter.vegetarian ? (
              <span className="recipe-vegetarian">(V)</span>
            ) : (
              ""
            )}{" "}
          </h1>
          <img
            src={oneStarter.image}
            style={{ width: "400px" }}
            alt={oneStarter.title}
            className="recipe-image"
          />
          <h3 className="main-title">Ingredients</h3>
          <ReactMarkdown className="recipe-text">
            {oneStarter.ingredients}
          </ReactMarkdown>
          <br />
          <h3 className="main-title">Instructions</h3>
          <ReactMarkdown className="recipe-text">
            {oneStarter.instructions}
          </ReactMarkdown>
          <h4>Share the recipe</h4>
          <div className="recipe-social">
            <EmailShareButton
              url={`https://nonnascookbook.netlify.app/${oneStarter.type}/${oneStarter.nameid}`}
            >
              <EmailIcon round size={35} />
            </EmailShareButton>
            <FacebookShareButton
              url={`https://nonnascookbook.netlify.app/${oneStarter.type}/${oneStarter.nameid}`}
            >
              <FacebookIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://nonnascookbook.netlify.app/${oneStarter.type}/${oneStarter.nameid}`}
            >
              <TwitterIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={`https://nonnascookbook.netlify.app/${oneStarter.type}/${oneStarter.nameid}`}
            >
              <WhatsappIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </WhatsappShareButton>
          </div>
        </div>
        <div className="bttn-container">
          <h4 className="bttn-intro">Not quite what you were looking for?</h4>
          <button className="nav-bttn" onClick={() => navigate("/starters")}>
            Go back to all starters
          </button>
        </div>
      </div>
    </div>
  );
}
