const axios = require('axios')
const apiContext = {
   server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production'){
   apiContext.server = 'https://powerful-sierra-93873.herokuapp.com/'
}

const index = async function(req, res) {
   try {
      let apiURL = apiContext.server + "/api/podcasts/"
      axios.get(apiURL).then(response => {
         res.render('index', {
            title: 'Scavengers Network Podcast Database',
            podcasts: response.data
         })
         console.log(response.data)
      }) 
   } catch(error){
      res.render('error')
   }
}


const about = (req, res, next) => {
   res.render('about', {title: 'About'})
}

module.exports = {
   index,
   about
}