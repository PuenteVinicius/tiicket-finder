import IYTAPIResponse, {
  ISnippet,
  IThumbnail,
  IYoutubeVideos,
} from "../../domain/youtube";
import YoutubeApi from "./youtube";
const KEYWORD = "arianagrande";

describe("Youtube API", () => {
  jest.setTimeout(1200);

  it("Should return a list with videos of artist", async () => {
    const artist: IYTAPIResponse = await YoutubeApi.getArtistVideos(KEYWORD);

    if (!artist || !artist.items) return;

    const item = artist.items[0];

    const { snippet } = item;
    const { thumbnails } = snippet;

    testArtist(artist);
    testItems(item);
    testSnippet(snippet);
    testThumbnails(thumbnails);
  });
  it("should not return a vallue when artist name is less than 3 caractres", async () => {
    const attraction = await YoutubeApi.getArtistVideos("do");
    expect(attraction).toEqual({});
  });
  it("When artist endpoint returns an error", () => {
    const mockTicketMasterApi = jest.spyOn(YoutubeApi, "getArtistVideos");
    const getArtistVideos = (): any => {
      return Error;
    };
    mockTicketMasterApi.mockReturnValue(getArtistVideos());
    const attraction = YoutubeApi.getArtistVideos(KEYWORD);
    expect(attraction).toEqual(Error);
  });

  function testArtist(artist: IYTAPIResponse) {
    expect(artist.nextPageToken).toEqual("CAUQAA");
    expect(artist.regionCode).toEqual("BR");
    if (!artist.pageInfo || !artist.pageInfo || !artist.items) return;
    expect(artist.pageInfo.totalResults).toEqual(1000000);
    expect(artist.pageInfo.resultsPerPage).toEqual(5);
    expect(artist.items.length).toBeGreaterThan(0);
  }

  function testItems(item: IYoutubeVideos) {
    expect(item.id.kind).toEqual("youtube#video");
    expect(item.id.videoId).toEqual("SXiSVQZLje8");
  }

  function testSnippet(snippet: ISnippet) {
    expect(snippet.publishedAt).toEqual("2016-08-30T03:00:00Z");
    expect(snippet.channelId).toEqual("UC0VOyT2OCBKdQhF3BAbZ-1g");
    expect(snippet.title).toEqual(
      "Ariana Grande ft. Nicki Minaj - Side To Side (Official Video) ft. Nicki Minaj"
    );
    expect(snippet.description).toEqual(
      "Directed by Hannah Lux Davis Produced by Brandon Bonfiglio For London Alley Lyrics: I've been here all night (Ariana) I've been here all day (Nicki Minaj) And ..."
    );
    expect(snippet.channelTitle).toEqual("ArianaGrandeVevo");
    expect(snippet.liveBroadcastContent).toEqual("none");
    expect(snippet.publishTime).toEqual("2016-08-30T03:00:00Z");
  }

  function testThumbnails(thumbnails: IThumbnail) {
    expect(thumbnails.default.url).toEqual(
      "https://i.ytimg.com/vi/SXiSVQZLje8/default.jpg"
    );
    expect(thumbnails.default.width).toEqual(120);
    expect(thumbnails.default.height).toEqual(90);

    expect(thumbnails.medium.url).toEqual(
      "https://i.ytimg.com/vi/SXiSVQZLje8/mqdefault.jpg"
    );
    expect(thumbnails.medium.width).toEqual(320);
    expect(thumbnails.medium.height).toEqual(180);

    expect(thumbnails.high.url).toEqual(
      "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg"
    );
    expect(thumbnails.high.width).toEqual(480);
    expect(thumbnails.high.height).toEqual(360);
  }
});
