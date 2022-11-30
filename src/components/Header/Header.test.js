import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Testing Header component", () => {
  test("check our Header has a title", () => {
    render(<Header title="Testing title" />);

    expect(screen.getByRole("heading")).toBeVisible();
  });

  test("check our Header title is correct", () => {
    render(<Header title="Testing title" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Testing title");
  });
});
