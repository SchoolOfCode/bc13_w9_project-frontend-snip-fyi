import React, { useState } from "react";
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";

import "./Modal.css";
import { ACTIONS } from "../App/App";

export default function Modal({ setIsModalOpen, dispatch }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  async function handleSubmit(e) {
    // stops page from refreshing
    e.preventDefault();

    // validate the code entered is valid js code
    // otherwise errors

    const date = `${day}-${month}-${year}`;

    // validate if the users input has actual input
    // Prevents form from being submitted it one of the inputs is empty
    if (!title || !code || !desc) return;

    try {
      prettier.format(`${code}`, {
        parser: "babel",
        plugins: [parserBabel, parserHtml],
      });
    } catch (error) {
      alert("Invalid JS code");
      return;
    }

    // Create the object to send to our backend server
    const snippetData = {
      snippet_title: title,
      snippet_code: code,
      snippet_description: desc,
      snippet_date_create: date,
    };

    const response = await fetch("http://localhost:5000/api/codesnippet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snippetData),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log("error has happened when submitting the data");
      return;
    }

    dispatch({ type: ACTIONS.ADD_SNIPPET, payload: json.payload });
  }

  return (
    <form className="Modal" onSubmit={(e) => handleSubmit(e)}>
      <p>{`${day}-${month}-${year}`}</p>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      ></input>
      <textarea
        onChange={(e) => setCode(e.target.value)}
        placeholder="Your code here"
      />
      <textarea
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setIsModalOpen(false)}>
        Close
      </button>
    </form>
  );
}
