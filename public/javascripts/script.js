const axios = require('axios')
const apiContext = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production'){
    apiContext.server = 'https://powerful-sierra-93873.herokuapp.com/'
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});