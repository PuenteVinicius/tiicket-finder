import { render } from "@testing-library/react";
import "jest-styled-components";
import Header from "./Header";
describe("Header component", () => {
  let headerElement: any;

  beforeEach(() => {
    headerElement = render(<Header />);
  });

  it("renders home correctly", () => {
    expect(headerElement).toMatchSnapshot();
  });

  it("Should render the tile of the aplication", () => {
    expect(headerElement.getByText("Ticket Finder")).toBeInTheDocument();
  });
});
