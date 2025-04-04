import Button from "../app/components/Button";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("should render the button and toggle text on click", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: /show text/i });
    expect(button).toBeInTheDocument();
    expect(
      screen.queryByText("Hello button is clicked")
    ).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText("Hello button is clicked")).toBeInTheDocument();

    expect(button).toHaveTextContent("Hide Text");
    fireEvent.click(button);

    expect(
      screen.queryByText("Hello button is clicked")
    ).not.toBeInTheDocument();

    expect(button).toHaveTextContent("Show Text123");
  });
});
