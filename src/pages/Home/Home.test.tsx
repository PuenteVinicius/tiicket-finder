import { render } from "@testing-library/react";
import "jest-styled-components";
import Home from "./Home";
describe("Home component", () => {
  let view: any;

  beforeEach(() => {
    view = render(<Home />);
  });

  it("Should render text correctly", () => {
    expect(
      view.getByText("Busque por um artista")
    ).toBeInTheDocument();
    expect(
      view.getByText(
        "Iremos mostrar ingressos e videos do seu artista preferido :)"
      )
    ).toBeInTheDocument();
  });

  it("renders home correctly", () => {
    expect(view).toMatchSnapshot();
  });
});
