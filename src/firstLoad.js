import pizza from "./img/pizza.jpg"


export default function one() {
const content = document.querySelector("#content")

const nav = document.createElement("div")
nav.setAttribute("id", "nav")

const logo = document.createElement("div")
logo.textContent = "PizZA"
logo.setAttribute("id", "logo")
nav.appendChild(logo)

const ul = document.createElement("ul")

const liOne = document.createElement("li")
liOne.textContent = "MENU"
liOne.classList.add("links")
ul.appendChild(liOne)

const liTwo = document.createElement("li")
liTwo.textContent = "STORY"
liTwo.classList.add("links")
ul.appendChild(liTwo)

const liThree = document.createElement("li")
liThree.textContent = "HOURS & LOCATION"
liThree.classList.add("links")
ul.appendChild(liThree)

nav.appendChild(ul)

content.appendChild(nav)



const imgContainer = document.createElement("div")
imgContainer.setAttribute("id", "imgContainer")
imgContainer.style.background = `url(${pizza})`
imgContainer.style.backgroundSize = "cover"
imgContainer.style.backgroundRepeat = "no-repeat"
content.appendChild(imgContainer)
}