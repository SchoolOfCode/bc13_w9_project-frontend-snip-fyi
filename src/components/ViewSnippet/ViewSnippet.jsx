import React, { useEffect } from "react";

import "./ViewSnippet.css";

export default function ViewSnippet({
  setIsViewOpen,
  isViewOpen,
  cardList,
  cardId,
}) {
  return (
    <div className="ViewSnippet">
      <p>{cardList[cardId - 1].dateCreated}</p>
      <p>{cardList[cardId - 1].title}</p>
      <p>{cardList[cardId - 1].codeSnippet}</p>
      <p>{cardList[cardId - 1].description}</p>
      <button onClick={() => setIsViewOpen(false)}>Close</button>
    </div>
  );
}
