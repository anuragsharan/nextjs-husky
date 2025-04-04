import { render, screen } from "@testing-library/react";
import Text from "../app/components/Text";
import "@testing-library/jest-dom";

describe("TextComponent", () => {
  it("renders the correct text", () => {
    render(<Text text="Hello, I'am here..." />);
    const textElement = screen.getByText(/Hello, I'am here.../i);
    expect(textElement).toBeInTheDocument();
  });
});
