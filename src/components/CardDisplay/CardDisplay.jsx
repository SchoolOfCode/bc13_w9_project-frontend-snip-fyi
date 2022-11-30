import React from "react";
// CSS Import
import "./CardDisplay.css";
// Component Import
import Card from "../Card/Card";

export default function CardDisplay({ cardList, setIsViewOpen, setCardId }) {
  return (
    <div role="display" className="CardDisplay">
      {/* Go through the cardList array of snippets 
      and render a Card component for each of them */}
      {cardList.map((card) => {
        return (
          <Card
            key={card.snippet_id}
            id={card.snippet_id}
            title={card.snippet_title}
            dateCreated={card.snippet_date_create}
            codeSnippet={card.snippet_code}
            description={card.snippet_description}
            // Ideally we would want to use context, instead of prop drilling down
            // as we don't use these states / functions in CardDisplay itself, but instead Card
            setIsViewOpen={setIsViewOpen}
            setCardId={setCardId}
          />
        );
      })}
    </div>
  );
}
