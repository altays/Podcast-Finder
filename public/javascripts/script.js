let searchBar = document.getElementById("text");
let submitButton = document.getElementById("submit");

const apiContext = {
    server: 'http://localhost:3000'
 }
 if (process.env.NODE_ENV === 'production'){
    apiContext.server = 'https://powerful-sierra-93873.herokuapp.com'
 }

redirect = function() {
    if (searchBar.value != "") {
        let url = path+"/search/"+searchBar.value
        location.href=url
    } else {
        location.href = path
    }
} 

submitButton.addEventListener('click',redirect)