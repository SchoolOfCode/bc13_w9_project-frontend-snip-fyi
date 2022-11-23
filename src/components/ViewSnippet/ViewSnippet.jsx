import React from "react";
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";

import "./ViewSnippet.css";
import { ACTIONS } from "../App/App";

export default function ViewSnippet({
  setIsViewOpen,
  cardList,
  cardId,
  dispatch,
}) {
  let clickedCard = cardList.filter((card) => card.snippet_id === cardId);
  console.log(clickedCard);

  // handleDelete function that takes in an id
  // the id is used to send a delete request to the back end server
  // dispatch a delete from useReducer
  async function handleDelete(cardId) {
    const response = await fetch(
      `http://localhost:5000/api/codesnippet/${cardId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    const jsonResponse = await response.json();

    if (!response.ok) {
      console.log("error has happened when deleting the data");
      return;
    }
    setIsViewOpen(false);
    dispatch({ type: ACTIONS.DELETE_SNIPPET, payload: jsonResponse.payload });
  }

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
      <button onClick={() => handleDelete(cardId)}>Delete</button>
    </div>
  );
}
