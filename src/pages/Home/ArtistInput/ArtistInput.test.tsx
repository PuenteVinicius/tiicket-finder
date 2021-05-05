import { render, fireEvent, screen } from "@testing-library/react";
import "jest-styled-components";
import TicketMasterApi from "../../../api/ticket-master/ticket-master";
import ArtistInput from "./ArtistInput";
import useDebounce from "../../../utils/hooks";

const DEBOUNCE_DELAY = 3000;

const setArtist = async (keyword: string) => {
  return await TicketMasterApi.getArtist(keyword);
};

const ARTIST_NAME = "Ariana Grande";
describe("ArtistInput component", () => {
  let artistInput: any;
  beforeEach(() => {
    artistInput = render(<ArtistInput callback={setArtist} />);
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
    it("When user type a band or an artist name", async () => {
      let input = screen.getByTestId("artist-input");

      fireEvent.change(input, { target: { value: ARTIST_NAME } });
      expect(artistInput.getByDisplayValue(ARTIST_NAME)).toBeInTheDocument();
      setTimeout(() => {
        expect(useDebounce({}, DEBOUNCE_DELAY)).toBeCalledTimes(1);
      }, DEBOUNCE_DELAY);
    });
  });
});
