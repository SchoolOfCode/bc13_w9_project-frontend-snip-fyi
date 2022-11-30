import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import prettier from "https://unpkg.com/prettier@2.8.0/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.8.0/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.8.0/esm/parser-html.mjs";
import "@testing-library/jest-dom";

import formatDate from "../../helpers/formatDate";
import Card from "./Card";

describe("Renders all of our Cards", () => {
  // Arrange

  const cardDetails = {
    title: "testing title",
    date: formatDate(),
    code: "console.log('hello world');",
    description: "simple test",
    cardId: 10,
  };

  render(
    <Card
      title={cardDetails.title}
      dateCreated={cardDetails.date}
      description={cardDetails.description}
      codeSnippet={cardDetails.code}
      setCardId={cardDetails.cardId}
      setIsViewOpen={() => jest.fn()}
    />
  );

  // Act
  screen.findByRole("card");

  // Assert
  expect(screen.getByRole("card")).toHaveTextContent("testing title");
});
