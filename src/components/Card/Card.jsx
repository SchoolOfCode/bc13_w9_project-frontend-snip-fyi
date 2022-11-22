import React from "react";

export default function Card({
  title,
  date,
  description,
  codeSnippet,
  tags,
  numComments,
}) {
  return (
    <div className="Card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{codeSnippet}</p>
      <p>{description}</p>
      <div>{tags}</div>
      <p>{numComments} comments</p>
    </div>
  );
}
