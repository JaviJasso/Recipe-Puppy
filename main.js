let searchSpot = document.getElementById("searchTerm")
let button = document.getElementById("searchButton")
let ul = document.querySelector("ul")
let url = "https://crossorigin.me/http://www.recipepuppy.com/api/?q="

const getRecipes = () => {
  fetch(url + searchSpot.value)
    .then(response => response.json()) // after the request, we wait for the response, we put the response in JSON form
    .then(data => {
      // AND THENNNNNN
      data.results.forEach(recipe => {
        let li = document.createElement("li") // creating the LI to hold all of our stuff in the list
        let img = document.createElement("img") // creating the image tag for the page
        let a = document.createElement("a") // creating the anchor tag for the page
        let theText = document.createTextNode(recipe.title) //setting the link text
        a.href = recipe.href // setting anchor to hrey for link launch -recipe.href beacuse we set loop forEach(recipe => {})
        a.appendChild(theText) // text for the link <a href="#"> text here </a>
        if (recipe.thumbnail.length > 1) {
          // checking to see if the recipe has a thumbnail image
          img.src = recipe.thumbnail // if it does have a thumbnail image we set it here
        } else {
          img.src = "http://via.placeholder.com/200x200" // if it does not have a thumbail, we give it a placeholder
        }
        // li.textContent = recipe.title //setting the text inside the LI
        li.appendChild(img) // adding the image to the LI
        li.appendChild(a) // adding the anchor to the LI
        ul.appendChild(li) // adding the LI to the page
      })
    })
}
button.addEventListener("click", getRecipes) // Putting the event into a method so we can reference the method in the click event.. makes for shorter cleaner code
