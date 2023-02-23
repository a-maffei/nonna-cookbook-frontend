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

export default function Pastarecipe({ pasta }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const onePasta = pasta.find((pasta) => pasta.nameid === id);

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
            {onePasta.title}
            {onePasta.vegetarian ? (
              <span className="recipe-vegetarian">(V)</span>
            ) : (
              ""
            )}{" "}
          </h1>
          <img
            src={onePasta.image}
            style={{ width: "400px" }}
            alt={onePasta.title}
            className="recipe-image"
          />
          <h3 className="main-title ingredients">Ingredients</h3>
          <ReactMarkdown className="recipe-text">
            {onePasta.ingredients}
          </ReactMarkdown>
          <br />
          <h3 className="main-title instructions">Instructions</h3>
          <ReactMarkdown className="recipe-text">
            {onePasta.instructions}
          </ReactMarkdown>

          <h4>Share the recipe</h4>
          <div className="recipe-social">
            <EmailShareButton
              url={`https://nonnascookbook.netlify.app/${onePasta.type}/${onePasta.nameid}`}
            >
              <EmailIcon round size={35} />
            </EmailShareButton>
            <FacebookShareButton
              url={`https://nonnascookbook.netlify.app/${onePasta.type}/${onePasta.nameid}`}
            >
              <FacebookIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://nonnascookbook.netlify.app/${onePasta.type}/${onePasta.nameid}`}
            >
              <TwitterIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={`https://nonnascookbook.netlify.app/${onePasta.type}/${onePasta.nameid}`}
            >
              <WhatsappIcon round size={35} style={{ marginLeft: "0.3em" }} />
            </WhatsappShareButton>
          </div>
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
