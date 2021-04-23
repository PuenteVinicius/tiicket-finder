import TicketMasterApi from "./ticket-master";

const ARTIST_NAME = "Ariana Grande";
const ARTIST_ID = "K8vZ9172Qo7";
describe("Attraction By Keyword", () => {
  it("Correct attraction information must show correct values", async () => {
    const attraction = await TicketMasterApi.getAttractionByKeyword(
      ARTIST_NAME
    );
    expect(attraction.name).toEqual(ARTIST_NAME);
    expect(attraction.type).toEqual("attraction");
    expect(attraction.locale).toEqual("en-us");
    expect(attraction.id).toEqual(ARTIST_ID);
  });
  it("Correct external links must show correct values", async () => {
    const { externalLinks } = await TicketMasterApi.getAttractionByKeyword(
      ARTIST_NAME
    );
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
  });
  it("At least one images should exist", async () => {
    const { images } = await TicketMasterApi.getAttractionByKeyword(
      ARTIST_NAME
    );
    expect(images.length).toBeGreaterThan(0);
  });
  it("Correct classifications must show correct values", async () => {
    const { classifications } = await TicketMasterApi.getAttractionByKeyword(
      ARTIST_NAME
    );

    expect(classifications[0].segment.name).toEqual("Music");
    expect(classifications[0].genre.name).toEqual("Rock");
    expect(classifications[0].subGenre.name).toEqual("Pop");
    expect(classifications[0].type.name).toEqual("Individual");
    expect(classifications[0].subType.name).toEqual("Musician");
  });
});

describe("Attraction Details", () => {
  it("Correct attraction information must show correct values", async () => {
    const attraction = await TicketMasterApi.getAttractionById(ARTIST_ID);
    expect(attraction.name).toEqual(ARTIST_NAME);
    expect(attraction.type).toEqual("attraction");
    expect(attraction.locale).toEqual("en-us");
    expect(attraction.id).toEqual(ARTIST_ID);  
  });
  it("Correct external links must show correct values", async () => {
    const { externalLinks } = await TicketMasterApi.getAttractionById(ARTIST_ID);
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

  });
  it("At least one images should exist", async () => {
    const { images } = await TicketMasterApi.getAttractionById(ARTIST_ID);
    expect(images.length).toBeGreaterThan(0);
  });
  it("Correct classifications must show correct values", async () => {
    const { classifications } = await TicketMasterApi.getAttractionById(ARTIST_ID);
    expect(classifications[0].segment.name).toEqual("Music");
    expect(classifications[0].genre.name).toEqual("Rock");
    expect(classifications[0].subGenre.name).toEqual("Pop");
    expect(classifications[0].type.name).toEqual("Individual");
    expect(classifications[0].subType.name).toEqual("Musician");
  });
});
