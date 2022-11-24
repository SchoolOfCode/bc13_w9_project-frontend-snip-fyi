import React, { useState } from "react";
import { ACTIONS } from "../../helpers/reducers";

// Import used to format / check js code
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";
// CSS import
import "./CreateSnippet.css";
// Helper function that formats our date
import formatDate from "../../helpers/formatDate";

export default function CreateSnippet({ setIsCreateSnippetOpen, dispatch }) {
  // Initial states declared
  // TODO refactor states to be one single object
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    // stops page from refreshing
    e.preventDefault();
    // Reset our error state incase an error happened previously when submitting
    setError(false);

    // If a title, code or description doesn't exist
    // don't submit any snippets
    if (!title || !code || !desc) return;

    // Checks if the code inside our form is valid JS
    // If we catch an error, we know it's invalid
    // and then display an alert to the user
    try {
      prettier.format(`${code}`, {
        parser: "babel",
        plugins: [parserBabel, parserHtml],
      });
    } catch (error) {
      // ideally this would be a nice message displayed within the
      console.log("Invalid JS code");
      setError(true);
      return;
    }

    // Create a snippet object to send to our backend server
    // and store in our database
    const snippetData = {
      snippet_title: title,
      snippet_code: code,
      snippet_description: desc,
      snippet_date_create: formatDate(),
    };

    // fetches our API URI
    // Set the headers to be json so the server knows what type of payload to expect
    // sends a POST request with the body of the object created above
    const response = await fetch("http://localhost:5000/api/codesnippet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snippetData),
    });

    // Store the response object and convert from json -> js object
    const json = await response.json();

    // If an error happened return and console log it
    // return out of the function so we don't store in state
    if (!response.ok) {
      console.log("error has happened when submitting the data");
      return;
    }
    // Closes the modal when a new snippet has been created
    setIsCreateSnippetOpen(false);
    // calls our dispatch function to add our new snippet to state
    dispatch({ type: ACTIONS.ADD_SNIPPET, payload: json.payload });
  }

  return (
    <form className="CreateSnippet" onSubmit={(e) => handleSubmit(e)}>
      {/* sets our modal to false, which in turn causes a re-render to close our modal */}
      <div className="button-wrapper">
        <button
          className="close-button"
          type="button"
          onClick={() => setIsCreateSnippetOpen(false)}
        >
          Close
        </button>
      </div>
      <p className="date-block">{formatDate()}</p>
      <input
        className="title-block"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      ></input>
      {/* If an error / js code did pass return an error to our display */}
      {error ? (
        <>
          <p className="error-message">
            The JavaScript code entered is not valid
          </p>
          <textarea
            className="error code-block"
            spellCheck="false"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        </>
      ) : (
        <textarea
          spellCheck="false"
          className="code-block"
          onChange={(e) => setCode(e.target.value)}
          placeholder="Your code here"
        />
      )}
      <textarea
        className="description-block"
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      {/* 
      because button is of type submit within a <form> it'll call the handleSubmit function 
      declared inside our form tag 
        */}
      <div className="button-wrapper">
        <button className="save-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
