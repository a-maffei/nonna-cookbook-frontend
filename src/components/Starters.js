import React from "react";
import { Link } from "react-router-dom";
import Startersrecipe from "./Startersrecipe";

export default function Starters({ starters }) {
  console.log(starters);

  return (
    <div>
      Starters
      {starters &&
        starters.map((recipe, key) => (
          <div>
            <Link to={`/starters/${recipe.fields.nameId}`}>
              <h3> {recipe.fields.title} </h3>
            </Link>
            <img
              src={recipe.fields.image.fields.file.url}
              style={{ width: "100px" }}
            />
          </div>
        ))}
    </div>
  );
}
