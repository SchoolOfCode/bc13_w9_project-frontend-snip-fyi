import React, { useReducer } from "react";
import { ACTIONS, commentReducer } from "../../helpers/reducers";
// Import used to format / check js code
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";
// CSS import
import "./ViewSnippet.css";
// Component imports
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

// Destructured props sent
export default function ViewSnippet({
  setIsViewOpen,
  cardList,
  cardId,
  dispatch,
}) {
  // Initial state declared
  const [commentsState, commentsDispatch] = useReducer(commentReducer, []);

  // Create a new array of a single snippet where the id matches
  const clickedCard = cardList.filter((card) => card.snippet_id === cardId);

  // handleDelete function that takes in an id
  // the id is used to send a delete request to the back end server
  // dispatch a delete from useReducer
  async function handleDelete(cardId) {
    // Send a delete request to our backend to remove the snippet from the database
    const response = await fetch(
      `http://localhost:5000/api/codesnippet/${cardId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    // convert our json response to a js object
    const jsonResponse = await response.json();

    // If an error happened return and console log it
    if (!response.ok) {
      console.log("error has happened when deleting the data");
      return;
    }
    // Close the view before removing the data
    // so our app does not crash when it can't render data that no longer exists
    setIsViewOpen(false);

    // remove our snippet from the state
    dispatch({ type: ACTIONS.DELETE_SNIPPET, payload: jsonResponse.payload });
  }

  return (
    // As stated before, because it'll be the only snippet in the array
    // we can directly access it using [0]
    <div className="ViewSnippet">
      {/* closes our view modal */}
      <div className="button-wrapper">
        <button className="close-button" onClick={() => setIsViewOpen(false)}>
          Close
        </button>
      </div>
      <p className="date-block">{clickedCard[0].snippet_date_create}</p>
      <h2>{clickedCard[0].snippet_title}</h2>
      <pre>
        <code>
          {/* renders our string into formatted js code 
              using babel
          */}
          {prettier.format(`${clickedCard[0].snippet_code}`, {
            parser: "babel",
            plugins: [parserBabel, parserHtml],
          })}
        </code>
      </pre>
      <div className="description-wrapper">
        <p>{clickedCard[0].snippet_description}</p>
      </div>
      {/* calls our delete function and passes its card id, to delete */}
      <div className="button-wrapper">
        <button className="delete-button" onClick={() => handleDelete(cardId)}>
          Delete Snippet
        </button>
      </div>
      {/* render our CommentList and pass down the comments state, dispatch function and id */}
      <CommentList
        commentsState={commentsState}
        commentsDispatch={commentsDispatch}
        cardId={cardId}
      />
      {/* render our CommentForm and pass down the comments state, dispatch function and id */}
      <CommentForm commentsDispatch={commentsDispatch} cardId={cardId} />
    </div>
  );
}
