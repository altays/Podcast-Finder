let searchBar = document.getElementById("autocomplete-input");
let submitButton = document.getElementById("submit");
let form = document.getElementById("form")
let closeIcons = document.getElementsByClassName("icon-black")

const apiContext = {
    server: 'https://powerful-sierra-93873.herokuapp.com'
    // server: "http://localhost:3000"
}

// reloading page to make API call
let redirect = function() {
    let url = ""
    if (searchBar.value != "") {
        url = apiContext.server+"/search/"+searchBar.value
        // console.log(url)
        return location.href=url
        
    } else {
        url = apiContext.server
        return location.href = url
    }
} 

// initializing autocomplete
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');    

    let autoData = {
        "Spooky": null,
        "Minute": null,
        "Alabaster": null,
        "Whamjuice":null
    }
        
    let options = { 
        data: autoData
    }

    console.log("loaded")
    var instances = M.Autocomplete.init(elems, options);

});  

submitButton.addEventListener('click',redirect)

for (let i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener("click", function(event){
        let parentCol = this.parentElement.parentElement.parentElement.parentElement
        let parentRow = parentCol.parentElement
        parentRow.removeChild(parentCol)
    })
}

// preventing Enter key from refreshing page
form.addEventListener("submit", function(event){
    event.preventDefault()
})