import React from "react";
import { Link } from "react-router-dom";
export default function Pasta({ pasta }) {
  return (
    <div>
      Pasta
      {pasta &&
        pasta.map((recipe, key) => (
          <div>
            <Link to={`/pasta/${recipe.fields.nameId}`}>
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
