import React from "react";
// CSS import
import "./Comment.css";

const aria_comment = "comment";
const aria_initials = "initials";
const aria_date = "date";

function Comment({ author, content, date }) {
  /**
   * Splits authors name into initials.
   * Takes the first letter of every word (name).
   * Joins them together and upperCases it
   */
  const authorInitials = author
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div role={aria_comment} className="Comment">
      <div className="authors-name">
        <div className="circle-initials">
          <p role={aria_initials} className="initials">
            {authorInitials}
          </p>
        </div>

        <h3 className="comment-author">{author}</h3>
      </div>
      <p className="comment-content">{content}</p>
      <p role={aria_date} className="comment-date">
        {date}
      </p>
    </div>
  );
}

export default Comment;
