const TicketMaster = {
  url: process.env.REACT_APP_TM_URL,
  apiKey: process.env.REACT_APP_TM_CONSUMER_KEY,
  paths: {
    atractionKeyword: '.json?size=1&apikey=' + process.env.REACT_APP_TM_CONSUMER_KEY + '&keyword=', 
    atractionId: '.json?apikey=' + process.env.REACT_APP_TM_CONSUMER_KEY,
  },
}

export { TicketMaster }
