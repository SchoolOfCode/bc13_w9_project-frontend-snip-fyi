import React from "react";
import "./Card.css";
export default function Card({
  id,
  title,
  dateCreated,
  description,
  codeSnippet,
  tags,
  commentIds,
  setIsViewOpen,
  setCardId,
}) {
  function handleClick() {
    setIsViewOpen(true);
    setCardId(id);
    // setIsViewOpen to false
  }
  return (
    <div onClick={() => handleClick()} className="Card">
      <h3 className="title">{title}</h3>
      <p className="date">{dateCreated}</p>
      <p>{codeSnippet}</p>
      <p className="description">{description}</p>
      <div>{tags}</div>
      <p>{commentIds.length} comments</p>
    </div>
  );
}
