import React from "react";
import "./Card.css";
export default function Card({
  title,
  dateCreated,
  description,
  codeSnippet,
  tags,
  commentIds,
}) {
  return (
    <div className="Card">
      <h3 className="title">{title}</h3>
      <p className="date">{dateCreated}</p>
      <p>{codeSnippet}</p>
      <p className="description">{description}</p>
      <div>{tags}</div>
      <p>{commentIds.length} comments</p>
    </div>
  );
}
