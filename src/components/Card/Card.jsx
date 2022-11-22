import React from "react";

export default function Card({
  title,
  date,
  description,
  tags,
  numComments,
  numUpvotes,
}) {
  return (
    <div className="Card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
      <div>{tags}</div>
      <p>
        {numComments} comments, {numUpvotes} upvotes
      </p>
    </div>
  );
}
