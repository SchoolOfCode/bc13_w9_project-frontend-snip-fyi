import React from "react";
import "./Modal.css";

export default function Modal({ setIsModalOpen }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className="Modal">
      <p className="date">{`${day}-${month}-${year}`}</p>
      <input className="input_title" type="text" placeholder="Title"></input>
      <textarea className="input_code" placeholder="Your code here" />
      <textarea className="input_description" placeholder="Description" />
      <button className="save_button">Save</button>
      <button className="close_button" onClick={() => setIsModalOpen(false)}>
        Close
      </button>
    </div>
  );
}
