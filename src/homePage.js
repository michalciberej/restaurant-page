import pizza from "./img/pizza.jpg"
import { resetDOM } from "./reset"

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