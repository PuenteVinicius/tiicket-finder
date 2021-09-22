import { render } from "@testing-library/react";
import "jest-styled-components";
import TicketMasterApi from "../../../api/ticket-master/ticket-master";
import IAtraction from "../../../domain/atraction";
import Artist from "./Artist";

const ARTIST_NAME = "Dua Lipa";


describe("Artist component", () => {
  let artistComponent: any;

  beforeEach(() => {
    let atraction: IAtraction | string; 
    TicketMasterApi.getArtist(ARTIST_NAME).then(response => {
      atraction = response;
      artistComponent = render(<Artist artist={atraction} />);
    })
  });

  it("renders home correctly", () => {
    expect(artistComponent).toMatchSnapshot();
  });

});
