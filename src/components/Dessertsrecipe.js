import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./recipe.css";
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

export default function Dessertsrecipe({ dessert }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const oneDessert = dessert.find((dessert) => dessert.nameid === id);

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
          <h1 className="recipe-title">{oneDessert.title}</h1>
          <img
            src={oneDessert.image}
            style={{ width: "400px" }}
            alt={oneDessert.title}
            className="recipe-image"
          />
          <h3 className="main-title">Ingredients</h3>
          <ReactMarkdown className="recipe-text">
            {oneDessert.ingredients}
          </ReactMarkdown>
          <br />
          <h3 className="main-title">Instructions</h3>
          <ReactMarkdown className="recipe-text">
            {oneDessert.instructions}
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
          <button className="nav-bttn" onClick={() => navigate("/dessert")}>
            Go back to all desserts
          </button>
        </div>
      </div>
    </div>
  );
}
