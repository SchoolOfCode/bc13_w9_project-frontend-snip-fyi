import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import CardDisplay from "./CardDisplay";

describe("Renders all of our Cards", () => {
  // Arrange
  const state = [
    {
      snippet_id: 15,
      snippet_title: "Test snippet",
      snippet_code: "console.log('hello from react testing library",
      snippet_description: "testing library test",
      snippet_date_create: "30-11-2022",
    },
  ];
  render(
    <CardDisplay
      setIsViewOpen={() => jest.fn()}
      setCardId="15"
      cardList={state}
    />
  );

  // Act
  screen.findByRole("display");

  // Assert
  expect(screen.getByRole("display")).toHaveTextContent("Test snippet");
});
