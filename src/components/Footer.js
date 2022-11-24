import React from "react";
import "./footer.css";
import { FaPizzaSlice } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">
        Made with React & hunger by Alessandra, Antonio and Armin{" "}
        <FaPizzaSlice className="footer-icon" />
      </p>
    </div>
  );
}
