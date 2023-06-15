import { resetDOM } from "./reset"
import { displayMenu } from "./menuPage"
import { displayStory } from "./storyPage"

export function createrNavBar() {

    const nav = document.createElement("div")
    nav.setAttribute("id", "nav")

    const logo = document.createElement("div")
    logo.textContent = "PIZZERIA"
    logo.setAttribute("id", "logo")
    nav.appendChild(logo)

    const ul = document.createElement("ul")

    const liOne = document.createElement("li")
    liOne.textContent = "MENU"
    liOne.classList.add("links")
    liOne.setAttribute("id", "menuBtn")
    ul.appendChild(liOne)
    liOne.addEventListener("click", () => {
        resetDOM()
        createrNavBar()
        displayMenu()
    })

    const liTwo = document.createElement("li")
    liTwo.textContent = "STORY"
    liTwo.classList.add("links")
    liTwo.setAttribute("id", "storyBtn")
    ul.appendChild(liTwo)
    liTwo.addEventListener("click", () => {
        resetDOM()
        createrNavBar()
        displayStory()
    })

    const liThree = document.createElement("li")
    liThree.textContent = "HOURS & LOCATION"
    liThree.classList.add("links")
    liThree.setAttribute("id", "halBtn")
    ul.appendChild(liThree)
    liThree.addEventListener("click", () => {
        resetDOM()
        createrNavBar()
        // displayHAL()
    })
    
    nav.appendChild(ul)
    document.querySelector("#content").appendChild(nav)
}