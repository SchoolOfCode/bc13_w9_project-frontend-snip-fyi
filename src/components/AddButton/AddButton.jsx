import React from "react";
// CSS Import
import "./AddButton.css";
export default function AddButton({ setIsCreateSnippetOpen, buttonText }) {
  return (
    <div className="AddButton">
      {/* Sets our modal to true, which in turn opens the modal */}
      <button onClick={() => setIsCreateSnippetOpen(true)}>{buttonText}</button>
    </div>
  );
}
