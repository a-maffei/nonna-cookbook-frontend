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

  const oneStarter = starters.find((starter) => starter.fields.nameId === id);

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
          <h4>Share the recipe</h4>
          <div className="recipe-social">
            <EmailShareButton url={"https://youtu.be/xAf3SeP1Ucg"}>
              <EmailIcon round size={35} />
            </EmailShareButton>
            <FacebookShareButton url={"https://youtu.be/xAf3SeP1Ucg"}>
              <FacebookIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </FacebookShareButton>
            <TwitterShareButton url={"https://youtu.be/xAf3SeP1Ucg"}>
              <TwitterIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </TwitterShareButton>
            <WhatsappShareButton url={"https://youtu.be/xAf3SeP1Ucg"}>
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
