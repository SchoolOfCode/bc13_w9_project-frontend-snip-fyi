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
  setIsViewOpen,
  setCardId,
}) {
  /**
   * When a single snippet card has been clicked
   * set the state of cardId to the id that was clicked
   * and open the view
   */
  function handleClick() {
    setCardId(id);
    setIsViewOpen(true);
  }
  return (
    <div key={id} onClick={() => handleClick()} className="Card">
      <div className="card-inner-wrapper">
        <h3 className="title">{title}</h3>
        <p className="date">{dateCreated}</p>
        <pre>
          <code>
            {/* renders our string into formatted js code 
              using babel
          */}
            {prettier.format(`${codeSnippet}`, {
              parser: "babel",
              plugins: [parserBabel, parserHtml],
            })}
          </code>
        </pre>
        <div className="desc-wrapper">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}
