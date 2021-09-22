import Axios from "axios";
import { Youtube } from "../../constants/api";
import { verifyTextLeng } from "../../utils/helper";
import IYTAPIResponse from "../../domain/youtube";

const YoutubeApi = {
  getArtistVideosByKeyword: async (
    keyword: string
  ): Promise<IYTAPIResponse | undefined> => {
    if (!verifyTextLeng(keyword)) return;
    let artistVideos: IYTAPIResponse = {};
    const response: any = await Axios.get(Youtube.paths.search + keyword);
    if (response) {
      artistVideos = response.data;
    }
    return artistVideos;
  },

  getArtistVideos: async (keyword: string): Promise<IYTAPIResponse> => {
    let artist: IYTAPIResponse = {};
    const response: any = await YoutubeApi.getArtistVideosByKeyword(keyword);
    if (response) {
      artist = response;
    }
    return artist;
  },
};

export default YoutubeApi;
