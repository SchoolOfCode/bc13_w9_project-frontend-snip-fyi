import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import formatDate from "../../helpers/formatDate";

import Comment from "./Comment";

describe("Testing contents of a comment", () => {
  test("Check our comment exists", () => {
    render(
      <Comment
        author="Ben"
        content="New comment from react testing library"
        date={formatDate()}
      />
    );

    // Act
    screen.findByRole("comment");

    // Assert
    expect(screen.getByRole("comment")).toBeVisible();
  });
  test("Check our comment author is correct", () => {
    render(
      <Comment
        author="Ben"
        content="New comment from react testing library"
        date={formatDate()}
      />
    );

    // Act
    screen.findByRole("comment");

    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Ben");
  });

  test("Check our comment initials are correct", () => {
    render(
      <Comment
        author="Ben Middle Freemantle"
        content="New comment from react testing library"
        date={formatDate()}
      />
    );

    // Act
    screen.findByRole("comment");

    // Assert
    expect(screen.getByRole("initials")).toHaveTextContent("BMF");
  });

  test("Check our the date is the current date", () => {
    const now = formatDate();
    render(
      <Comment
        author="Ben Middle Freemantle"
        content="New comment from react testing library"
        date={formatDate()}
      />
    );

    // Act
    screen.findByRole("comment");

    // Assert
    expect(screen.getByRole("date")).toHaveTextContent(now);
  });
});
