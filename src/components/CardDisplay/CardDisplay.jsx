import React from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";

export default function CardDisplay({ cardList, setIsViewOpen, setCardId }) {
  return (
    <div className="CardDisplay">
      {cardList.map((card) => {
        return (
          <Card
            key={card.snippet_id}
            id={card.snippet_id}
            title={card.snippet_title}
            dateCreated={card.snippet_date_create}
            codeSnippet={card.snippet_code}
            description={card.snippet_description}
            commentIds={card.commentIds}
            // Ideally we would want to use context, instead of prop drilling down
            // from App > CardDisplay > Card
            setIsViewOpen={setIsViewOpen}
            setCardId={setCardId}
          />
        );
      })}
    </div>
  );
}
