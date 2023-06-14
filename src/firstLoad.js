import pizza from "./img/pizza.jpg"

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

    const liTwo = document.createElement("li")
    liTwo.textContent = "STORY"
    liTwo.classList.add("links")
    liOne.setAttribute("id", "storyBtn")

    ul.appendChild(liTwo)

    const liThree = document.createElement("li")
    liThree.textContent = "HOURS & LOCATION"
    liThree.classList.add("links")
    liOne.setAttribute("id", "halBtn")

    ul.appendChild(liThree)
    nav.appendChild(ul)
    document.querySelector("#content").appendChild(nav)
}

export function createImgBody() {

    const imgContainer = document.createElement("div")
    imgContainer.setAttribute("id", "imgContainer")
    imgContainer.style.background = `url(${pizza})`
    imgContainer.style.backgroundSize = "cover"
    imgContainer.style.backgroundRepeat = "no-repeat"
    document.querySelector("#content").appendChild(imgContainer)
}

export function createHomeLogo() {

    const logoContainer = document.createElement("div")
    logoContainer.setAttribute("id", "homeLogoContainer")

    const secondaryText = document.createElement("p")
    secondaryText.textContent = "FRESH HANDMADE PIZZA"
    secondaryText.setAttribute("id", "secondaryLogoText")
    logoContainer.appendChild(secondaryText)

    const mainText = document.createElement("h1")
    mainText.textContent = "PIZZERIA"
    mainText.setAttribute("id", "mainLogoText")
    logoContainer.appendChild(mainText)

    document.querySelector("#content").appendChild(logoContainer)
}

export function createLogo() {

    const logoContainer = document.createElement("div")
    logoContainer.setAttribute("id", "LogoContainer")

    const secondaryText = document.createElement("p")
    secondaryText.textContent = "FRESH HANDMADE PIZZA"
    secondaryText.setAttribute("id", "secondaryLogoText")
    logoContainer.appendChild(secondaryText)

    const mainText = document.createElement("h1")
    mainText.textContent = "PIZZERIA"
    mainText.setAttribute("id", "mainLogoText")
    logoContainer.appendChild(mainText)

    document.querySelector("#content").appendChild(logoContainer)
}