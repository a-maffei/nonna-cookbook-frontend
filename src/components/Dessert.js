import React from "react";
import { Link } from "react-router-dom";

export default function Dessert({ dessert }) {
  return (
    <div>
      {dessert &&
        dessert.map((recipe, key) => (
          <div>
            <Link to={`/desserts/${recipe.fields.nameId}`}>
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
