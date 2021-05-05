import Axios from "axios";
import IAtraction from "../../models/atraction";
import { TicketMaster } from "../../constants/api";
import { verifyTextLeng } from "../../utils/helper";

const TicketMasterApi = {
  getAttractionByKeyword: async (
    keyword: string
  ): Promise<IAtraction | undefined> => {
    if (!verifyTextLeng(keyword)) return;
    let atraction: IAtraction = {};
    const response: any = await Axios.get(
      TicketMaster.url + TicketMaster.paths.atractionKeyword + keyword
    );
    if (response.data._embedded) {
      const { attractions }: any = response.data._embedded;
      atraction = attractions[0];
    }

    return atraction;
  },

  getArtist: async (keyword: string): Promise<IAtraction> => {
    let artist: IAtraction = {};
    const response: any = await TicketMasterApi.getAttractionByKeyword(keyword);
    if (response) {
      artist = response;
    }
    return artist;
  },
};
export default TicketMasterApi;
