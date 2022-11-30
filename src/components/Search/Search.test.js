import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Search from "./Search";

describe("Testing search input field", () => {
  test("check our search input updates on user input", () => {
    render(<Search dispatch={(value) => jest.fn()} />);

    const searchInput = screen.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
