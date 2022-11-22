import React from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";

export default function CardDisplay({ cardList }) {
  return (
    <div className="CardDisplay">
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            dateCreated={card.dateCreated}
            codeSnippet={card.codeSnippet}
            description={card.description}
            commentIds={card.commentIds}
          />
        );
      })}
    </div>
  );
}
