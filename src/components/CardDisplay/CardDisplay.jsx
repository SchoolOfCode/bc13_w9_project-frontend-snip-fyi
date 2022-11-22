import React from "react";
import Card from "../Card/Card";

export default function CardDisplay({ cardList }) {
  return (
    <div>
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            date={card.date}
            description={card.description}
            tags={card.tags.map((tag) => {
              return <p key={tag}>{tag}</p>;
            })}
            numComments={card.numComments}
            numUpvotes={card.numUpvotes}
          />
        );
      })}
    </div>
  );
}
