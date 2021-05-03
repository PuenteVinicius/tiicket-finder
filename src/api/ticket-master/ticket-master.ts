import Axios from 'axios'
import { TicketMaster } from '../../constants/api'
import { toggles } from '../../constants/featureToggles'
import IAtraction from '../../models/atraction';

const TicketMasterApi = {
  getAttractionByKeyword: async (keyword:string): Promise<IAtraction | undefined> => {
    let atraction: IAtraction = {};
    if(toggles.apiIntegration) {
      const response: any = await Axios.get(TicketMaster.url + TicketMaster.paths.atractionKeyword + keyword);
      if(response.data._embedded) {
        const { attractions }: any = response.data._embedded;
        atraction = attractions[0];
      }
    }
    return atraction;
  },

  getAttractionById: async (id: string): Promise<IAtraction | undefined> => {
    let atraction: IAtraction = {};
    if(toggles.apiIntegration) {
      const response = await Axios.get(TicketMaster.url + '/' + id + TicketMaster.paths.atractionId);
      if(response.data) {
        atraction = response.data;
      }
    }
    return atraction;
  },
}
export default TicketMasterApi
