import React from "react";
import "./footer.css";
import { FaPizzaSlice } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
export default function Footer() {
  return (
    <div className="footer">
      <div className="latestNews">
        <h5>Subscribe for new recipes</h5>
        <input
          className="footer-input"
          type="text"
          placeholder="your e-mail adress"
        />
        <button className="footer-button">
          <ImNewspaper />
        </button>
      </div>
      <p className="footer-text">
        Made with React & hunger by Alessandra, Antonio and Armin{" "}
        <FaPizzaSlice className="footer-icon" />
      </p>

      <div className="social-icons">
        <h5>Connect with us</h5>
        <div className="icons">
          <a href="https://de-de.facebook.com/ " target="_blank">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
