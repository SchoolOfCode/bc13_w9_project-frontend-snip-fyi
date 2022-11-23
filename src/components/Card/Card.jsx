import React from "react";
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";
import "./Card.css";
export default function Card({
  id,
  title,
  dateCreated,
  description,
  codeSnippet,
  tags,
  commentIds,
  setIsViewOpen,
  setCardId,
}) {
  function handleClick() {
    setIsViewOpen(true);
    setCardId(id);
    // setIsViewOpen to false
  }
  return (
    <div key={id} onClick={() => handleClick()} className="Card">
      <h3 className="title">{title}</h3>
      <p className="date">{dateCreated}</p>
      {/* <p>{codeSnippet}</p> */}
      <pre>
        <code>
          {prettier.format(`${codeSnippet}`, {
            parser: "babel",
            plugins: [parserBabel, parserHtml],
          })}
        </code>
      </pre>
      <p className="description">{description}</p>
      <div>{tags}</div>
      {/* <p>{commentIds.length} comments</p> */}
    </div>
  );
}
