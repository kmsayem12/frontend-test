import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./components/Header";

configure({ adapter: new Adapter() });

test("header component", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Rental Software/i);
  expect(linkElement).toBeInTheDocument();
});
