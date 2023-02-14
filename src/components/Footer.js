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
      <p className="footer-text">
        Made with React, Express and hunger by Alessandra, Antonio and Armin{" "}
        <FaPizzaSlice className="footer-icon" />
      </p>

      <div className="social-icons"></div>
    </div>
  );
}
