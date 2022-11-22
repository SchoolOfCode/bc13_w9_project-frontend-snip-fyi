import React from "react";

export default function Modal({ setIsModalOpen }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div>
      <p>{`${day}-${month}-${year}`} </p>
      <textarea placeholder="Your code here" />
      <textarea placeholder="Description" />
      <button>Save</button>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
  );
}
