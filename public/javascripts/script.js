let searchBar = document.getElementById("text");
let submitButton = document.getElementById("submit");

redirect = function() {
    if (searchBar.value != "") {
        let url = "https://powerful-sierra-93873.herokuapp.com/search/"+searchBar.value
        location.href=url
    } else {
        location.href = "https://powerful-sierra-93873.herokuapp.com/"
    }
} 

submitButton.addEventListener('click',redirect)