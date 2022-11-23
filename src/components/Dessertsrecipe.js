import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Dessertsrecipe({ dessert }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  const oneDessert = dessert.find((dessert) => dessert.fields.nameId === id);

  console.log(oneDessert);
  return (
    <div>
      <h1>{oneDessert.fields.title}</h1>
      <img
        src={oneDessert.fields.image.fields.file.url}
        style={{ width: "400px" }}
        alt={oneDessert.fields.title}
      />
      <ReactMarkdown>{oneDessert.fields.ingredients}</ReactMarkdown>
      <br />
      <ReactMarkdown>{oneDessert.fields.instructions}</ReactMarkdown>

      <button onClick={() => navigate("/desserts")}>
        Show me all the desserts
      </button>
    </div>
  );
}
