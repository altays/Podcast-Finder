let searchBar = document.getElementById("text");
let submitButton = document.getElementById("submit");
let form = document.getElementById("form")
let closeIcons = document.getElementsByClassName("icon-red")

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

let showID = function(value) {
    var json = JSON.stringify({
        test: parseInt(value.dataset.id),
    });

    console.log(json)
}


submitButton.addEventListener('click',redirect)

form.addEventListener("submit", function(event){
    event.preventDefault()
})

for (let i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener("click", function(event){
        // let id = this.getAttribute("data-id")
        // console.log(id)

        let parentCol = this.parentElement.parentElement.parentElement.parentElement
        let parentRow = parentCol.parentElement
        parentRow.removeChild(parentCol)
    })
}