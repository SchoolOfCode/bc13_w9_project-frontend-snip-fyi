import React from "react";
// CSS import
import "./Comment.css";

function Comment({ author, content, date }) {
  // Splits authors name into initials
  // Takes the first letter of every word (name)
  // Joins them together
  // and upperCase it
  const authorInitials = author
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="Comment">
      <div className="authors-name">
        <div className="circle-initials">
          <p className="initials">{authorInitials}</p>
        </div>

        <h3>{author}</h3>
      </div>
      <p className="comment-content">{content}</p>
      <p>{date}</p>
    </div>
  );
}

export default Comment;