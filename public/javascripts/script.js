// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});
// });

let searchBar = document.getElementById("text");
let submitButton = document.getElementById("submit");

redirect = function() {
    // console.log(searchBar.value)
    if (searchBar.value != "") {
        let url = "http://www.localhost:3000/search/"+searchBar.value
        location.href=url
    } else {
        location.href = "http://www.localhost:3000/"
    }
} 

submitButton.addEventListener('click',redirect)