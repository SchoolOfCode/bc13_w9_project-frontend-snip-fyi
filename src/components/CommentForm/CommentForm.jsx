import React, { useState } from "react";
import formatDate from "../../helpers/formatDate";
import { ACTIONS } from "../App/reducers";

import "./CommentForm.css";

function CommentForm({ commentsState, commentsDispatch, cardId }) {
  // initial states
  const [author, setAuthor] = useState("Anonymous");
  const [comment, setComment] = useState("");

  async function handleSubmit(e) {
    // prevent page refresh
    e.preventDefault();

    // If not author or comment we don't want to run anymore code
    // so return
    if (!author || !comment) return;

    // Create a new comment object with the data we want to send to our backend
    // and create a new comment with
    const newComment = {
      snippet_id: cardId,
      comment_content: comment,
      comment_author: author,
      comment_date_create: formatDate(),
    };

    // Send a POST request to our API URI
    // headers set to JSON as we're sending a json payload
    // body contains our newly created object above ^^
    const response = await fetch(`http://localhost:5000/api/codecomment/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    // Converts json response to a js object
    const jsonResponse = await response.json();

    // Calls our comment dispatch function and appends a new comment
    // to the end of our state
    commentsDispatch({
      type: ACTIONS.ADD_COMMENT,
      payload: jsonResponse.payload,
    });

    // clear, and clean out our input states
    setAuthor("");
    setComment("");
  }

  return (
    <form className="CommentForm" onSubmit={(e) => handleSubmit(e)}>
      <label className="author-section">
        <p>Author:</p>
        {/* Sets the current input as our author state */}
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          value={author}
        />
      </label>
      <label>
        <p>Comment:</p>
        {/* Sets the current input as our comment state */}
        <textarea
          onChange={(e) => setComment(e.target.value)}
          type="text"
          value={comment}
        />
      </label>
      {/* 
      because button is of type submit within a <form> it'll call the handleSubmit function 
      declared inside our form tag 
        */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
