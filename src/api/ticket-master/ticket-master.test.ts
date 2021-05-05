import TicketMasterApi from "./ticket-master";
const ARTIST_NAME = "Ariana Grande";
const ARTIST_ID = "K8vZ9172Qo7";

describe("Artist", () => {
  jest.setTimeout(6000);
  it("Correct artist information must show correct values", async () => {
    const attraction = await TicketMasterApi.getArtist(ARTIST_NAME);

    if (!attraction) return;
    const { externalLinks, images, classifications } = attraction;
    if (!externalLinks || !images || !classifications) return;

    expect(attraction.name).toEqual(ARTIST_NAME);
    expect(attraction.type).toEqual("attraction");
    expect(attraction.id).toEqual(ARTIST_ID);

    expect(externalLinks.youtube[0].url).toEqual(
      "https://www.youtube.com/user/ArianaGrandeVevo"
    );
    expect(externalLinks.twitter[0].url).toEqual(
      "https://twitter.com/arianagrande"
    );
    expect(externalLinks.facebook[0].url).toEqual(
      "https://www.facebook.com/arianagrande"
    );
    expect(externalLinks.instagram[0].url).toEqual(
      "http://instagram.com/arianagrande"
    );

    expect(images.length).toBeGreaterThan(0);

    expect(classifications[0].segment.name).toEqual("Music");
    expect(classifications[0].genre.name).toEqual("Rock");
    expect(classifications[0].subGenre.name).toEqual("Pop");
    expect(classifications[0].type.name).toEqual("Individual");
    expect(classifications[0].subType.name).toEqual("Musician");
  });
  it("should not return a vallue when artist name is less than 3 caractres", async () => {
    const attraction = await TicketMasterApi.getArtist("do");
    expect(attraction).toEqual({});
  });
  it("When artist endpoint returns an error", () => {
    const mockTicketMasterApi = jest.spyOn(TicketMasterApi, "getArtist");
    const getArtist = ():any => {
      return Error;
    };
    mockTicketMasterApi.mockReturnValue(getArtist());
    const attraction = TicketMasterApi.getArtist(ARTIST_NAME);
    expect(attraction).toEqual(Error);
  });
});
