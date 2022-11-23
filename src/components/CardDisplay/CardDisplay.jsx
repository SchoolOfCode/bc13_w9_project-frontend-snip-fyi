import React from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";

export default function CardDisplay({ cardList, setIsViewOpen, setCardId }) {
  return (
    <div className="CardDisplay">
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            dateCreated={card.dateCreated}
            codeSnippet={card.codeSnippet}
            description={card.description}
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
