import { render, fireEvent, screen } from "@testing-library/react";
import "jest-styled-components";
import ArtistInput from "./ArtistInput";

describe("ArtistInput component", () => {
  let artistInput: any;
  beforeEach(() => {
    artistInput = render(<ArtistInput />);
  });
  it("Should render text correctly", () => {
    expect(
      artistInput.getByPlaceholderText("Faça sua busca aqui...")
    ).toBeInTheDocument();
  });

  it("renders home correctly", () => {
    expect(artistInput).toMatchSnapshot();
  });

  describe("Should be fired when an astist has changed", () => {
    it("When user type a band or an artist name", () => {
      let input = screen.getByTestId("artist-input");
      fireEvent.change(input, { target: { value: "Dua Lipa" } });
      expect(artistInput.getByDisplayValue("Dua Lipa")).toBeInTheDocument();
    });
  });
});
