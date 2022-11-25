import React from "react";

export default function Searchbar({ matchingRecipes }) {
  return matchingRecipes.map((recipe) => (
    <div>{matchingRecipes.fields.title}</div>
  ));
}
