import React from "react";
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";

import "./ViewSnippet.css";

export default function ViewSnippet({ setIsViewOpen, cardList, cardId }) {
  let clickedCard = cardList.filter((card) => card.snippet_id === cardId);
  console.log(clickedCard);

  return (
    <div className="ViewSnippet">
      <p>{clickedCard[0].snippet_date_create}</p>
      <p>{clickedCard[0].snippet_title}</p>

      <pre>
        <code>
          {prettier.format(`${clickedCard[0].snippet_code}`, {
            parser: "babel",
            plugins: [parserBabel, parserHtml],
          })}
        </code>
      </pre>
      <p>{clickedCard[0].snippet_description}</p>
      <button onClick={() => setIsViewOpen(false)}>Close</button>
    </div>
  );
}
