const axios = require('axios')
const apiContext = {
   server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production'){
   apiContext.server = 'https://powerful-sierra-93873.herokuapp.com'
}

const index = async function(req, res) {
   try {
      let apiURL = apiContext.server + "/api/podcasts/"
      axios.get(apiURL).then(response => {
         renderIndex(req,res,response)
      }) 
   } catch(error){
      res.render('error')
   }
}

const indexSearch = async function(req, res) {
   try {
      let apiURL = apiContext.server + "/api/podcasts/" + req.params.podSearch
      axios.get(apiURL).then(response => {
         renderIndex(req,res,response)
      }) 
   } catch(error){
      res.render('error')
   }
}

const renderIndex = function(req,res,response){
   res.render('index', {
      title: 'Scavengers Network Podcast Database',
      podcasts: response.data
   })
}

const about = (req, res, next) => {
   res.render('about', {title: 'About'})
}

module.exports = {
   index,
   about,
   indexSearch
}