import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("check for name in Home", () => {
  render(<Home/>);
  const linkElement = screen.getByText(/Kevin Laborda/i);
  expect(linkElement).toBeInTheDocument();
});
