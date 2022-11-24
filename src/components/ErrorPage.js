import React from "react";
import "./errorpage.css";
import Nonnas from "../images/nonnas.jpg";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2 className="main-title">Are you lost?</h2>
      <p className="main-subtitle">
        Keep calm, good things take patience. Go back to our homepage and start
        from there.
      </p>
      <img className="nonnas-image" src={Nonnas}></img>
      <button className="nav-bttn" onClick={() => navigate("/")}>
        Go back to all recipes
      </button>
    </div>
  );
}
