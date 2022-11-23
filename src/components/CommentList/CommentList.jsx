import React, { useEffect } from "react";
import { ACTIONS } from "../App/reducers";

// Components import
import Comment from "../Comment/Comment";

function CommentList({ commentsState, commentsDispatch, cardId }) {
  // fetches our comments every time our comment dispatch function is ran
  // or when cardId state changes (a new snippet card has been clicked on)
  useEffect(() => {
    async function getCommentsForSnippet() {
      const response = await fetch(
        `http://localhost:5000/api/codecomment/${cardId}`
      );

      // convert our json response to a js object
      const jsonResponse = await response.json();

      // DEBUG to see how many comment fetches were being made
      console.log("making a fetch for the comments");

      // call our comment dispatch function
      // and re update our comment state with the comments
      // that belong to the current snippet card opened
      commentsDispatch({
        type: ACTIONS.DISPLAY_COMMENTS,
        payload: jsonResponse.payload,
      });
    }

    // call our fetch function
    getCommentsForSnippet();
  }, [cardId, commentsDispatch]);

  return (
    <div>
      {/* if there is any comments in state render them if not, return an empty string 
      ? over && where possible*/}
      {commentsState ? (
        <>
          {commentsState.map((comment) => {
            return (
              // Render our Comment component and pass the comment data down for it to render
              <Comment
                key={comment.comment_id}
                author={comment.comment_author}
                content={comment.comment_content}
                date={comment.comment_date_create}
              />
            );
          })}
        </>
      ) : (
        // returns empty string if no comments in state
        ""
      )}
    </div>
  );
}

export default CommentList;
