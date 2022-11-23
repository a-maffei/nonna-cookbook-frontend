import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Startersrecipe({ starters }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const oneStarter = starters.find((starter) => starter.fields.nameId === id);

  console.log(oneStarter);
  return (
    <div>
      <h1>{oneStarter.fields.title}</h1>
      <img
        src={oneStarter.fields.image.fields.file.url}
        style={{ width: "400px" }}
        alt={oneStarter.fields.title}
      />
      <ReactMarkdown>{oneStarter.fields.ingredients}</ReactMarkdown>
      <br />
      <ReactMarkdown>{oneStarter.fields.instructions}</ReactMarkdown>

      <button onClick={() => navigate("/starters")}>
        Show me all the starters
      </button>
    </div>
  );
}
