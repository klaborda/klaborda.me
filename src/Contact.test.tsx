import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

const contactData = {
  linkedIn: 'https://www.linkedin.com/in/kevin-laborda-4386b71a/',
  email: 'klaborda@gmail.com'
}

test("check for content in Contact", () => {
  render(<Contact data={contactData} />);
  const linkElement = screen.getByText(/To contact me/i);
  expect(linkElement).toBeInTheDocument();
});
