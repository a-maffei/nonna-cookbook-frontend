import React from "react";
import Starter from "../images/starter.jpg";
import Pasta from "../images/pasta.jpg";
import Dessert from "../images/dessert.jpg";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Link to="/starters">
        <img src={Starter} style={{ width: "50%" }} />
      </Link>
      <br />
      <Link to="/pasta">
        <img src={Pasta} style={{ width: "50%" }} />
      </Link>
      <br />
      <Link to="/pasta">
        <img src={Dessert} style={{ width: "50%" }} />
      </Link>
    </div>
  );
}
