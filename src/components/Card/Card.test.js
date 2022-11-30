import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import formatDate from "../../helpers/formatDate";
import Card from "./Card";

const cardDetails = {
  title: "testing title",
  date: formatDate(),
  code: `console.log("hello world");`,
  description: "simple test",
  cardId: 10,
};

describe("Renders all of our Cards", () => {
  // Arrange
  test("Check our title is correct", () => {
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
    screen.getByRole("card");

    // Assert
    expect(screen.getByRole("card")).toHaveTextContent("testing title");
  });
  test("Check our code is correct", () => {
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
    screen.getByRole("card");

    // Assert
    expect(screen.getByRole("pre")).toHaveTextContent(
      `console.log("hello world");`
    );
  });
});
