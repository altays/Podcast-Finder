let searchBar = document.getElementById("text");
let submitButton = document.getElementById("submit");
let form = document.getElementById("form")

const apiContext = {
    server: 'https://powerful-sierra-93873.herokuapp.com'
    // server: "http://localhost:3000"
}

let redirect = function() {
    let url = ""
    if (searchBar.value != "") {
        url = apiContext.server+"/search/"+searchBar.value
        console.log(url)
        return location.href=url
        
    } else {
        url = apiContext.server
        return location.href = url
    }
} 

submitButton.addEventListener('click',redirect)

form.addEventListener("submit", function(event){
    event.preventDefault()
})