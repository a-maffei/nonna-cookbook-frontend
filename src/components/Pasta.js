import React from "react";
import { Link } from "react-router-dom";
import "./category.css";

export default function Pasta({ pasta }) {
  return (
    <div>
      <h1 className="category-title">Pasta</h1>
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
