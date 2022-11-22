import React from "react";

export default function AddButton({ setIsModalOpen, buttonText }) {
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>{buttonText}</button>
    </div>
  );
}
