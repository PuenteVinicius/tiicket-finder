import Axios from 'axios'
import { TicketMaster } from '../../constants/api'
import { toggles } from '../../constants/featureToggles'

const TicketMasterApi = {
  getAttractionByKeyword: async (keyword) => {
    if(toggles.apiIntegration) {
      let res = [];
      res = await Axios.get(TicketMaster.url + TicketMaster.paths.atractionKeyword + keyword);
      const { attractions } = res.data._embedded;
      return attractions[0];
    }
  },

  getAttractionById: async (id) => {
    if(toggles.apiIntegration) {
      let res = [];
      res = await Axios.get(TicketMaster.url + '/' + id + TicketMaster.paths.atractionId);
      return res.data;
    }
  },
}
export default TicketMasterApi
