const TicketMaster = {
  url: process.env.REACT_APP_TM_URL,
  apiKey: process.env.REACT_APP_TM_CONSUMER_KEY,
  paths: {
    atractionKeyword: '.json?size=1&apikey=' + process.env.REACT_APP_TM_CONSUMER_KEY + '&keyword=', 
    atractionId: '.json?apikey=' + process.env.REACT_APP_TM_CONSUMER_KEY,
  },
}

const Youtube = {
  url: process.env.REACT_APP_YT_BASE,
  apiKey: process.env.REACT_APP_YT_KEY,
  paths: {
    search: process.env.REACT_APP_YT_BASE + 'search?part=snippet&order=viewCount&type=video&videoDefinition=high&key=' + process.env.REACT_APP_YT_KEY + '&q=', 
  },
}
export { TicketMaster, Youtube }