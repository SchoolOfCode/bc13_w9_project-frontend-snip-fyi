import React from "react";
import "./Card.css";

const prettier = require("prettier/standalone");
const parserBabel = require("prettier/parser-babel");
const parserHtml = require("prettier/parser-html");

const aria_card = "card";
const aria_pre = "pre";

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
    <div
      role={aria_card}
      key={id}
      onClick={() => handleClick()}
      className="Card"
    >
      <div className="card-inner-wrapper">
        <h3 className="title">{title}</h3>
        <p className="date">{dateCreated}</p>
        <pre role={aria_pre}>
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
