import React from "react";
import "./AddButton.css";
export default function AddButton({ setIsModalOpen, buttonText }) {
  return (
    <div className="AddButton">
      <button onClick={() => setIsModalOpen(true)}>{buttonText}</button>
    </div>
  );
}
