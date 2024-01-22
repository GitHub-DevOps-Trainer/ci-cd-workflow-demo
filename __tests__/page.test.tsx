import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const docH = screen.getByRole("heading", {
      name: "Welcome to Simplilearn",
      level: 2,
    });

    expect(docH).toBeInTheDocument();
  });
});
