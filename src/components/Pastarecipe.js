import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
export default function Pastarecipe({ pasta }) {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const onePasta = pasta.find((pasta) => pasta.fields.nameId === id);

  console.log(onePasta);
  return (
    <div>
      <h1>{onePasta.fields.title}</h1>
      <img
        src={onePasta.fields.image.fields.file.url}
        style={{ width: "400px" }}
        alt={onePasta.fields.title}
      />
      <ReactMarkdown>{onePasta.fields.ingredients}</ReactMarkdown>
      <br />
      <ReactMarkdown>{onePasta.fields.instructions}</ReactMarkdown>

      <button onClick={() => navigate("/pasta")}>Show me all the pasta</button>
    </div>
  );
}
