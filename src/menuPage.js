import burger from "./img/hamburger.jpg"
import salad from "./img/salad.jpg"

export function displayMenu() {
    
    const content = document.querySelector("#content")

    const menuHeading = document.createElement("h1")
    menuHeading.textContent = "OUR MENU"
    menuHeading.setAttribute("id", "menuHeading")
    content.appendChild(menuHeading)
    
    const saladImgContainer = document.createElement("div")
    saladImgContainer.setAttribute("id", "saladImgContainer")
    content.appendChild(saladImgContainer)
    
    const saladImg = document.createElement("img")
    saladImg.classList.add("saladImg")
    saladImg.src = salad
    saladImgContainer.appendChild(saladImg)

    const saladContainer = document.createElement("div")
    saladContainer.classList.add("saladContainer")
    saladImgContainer.appendChild(saladContainer)

    const saladText = document.createElement("p")
    saladText.textContent = "SALADS"
    saladText.classList.add("saladText")
    saladContainer.appendChild(saladText)

    const foodContainer = document.createElement("div")
    foodContainer.setAttribute("id", "foodContainer")
    content.appendChild(foodContainer)

    const foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    let foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD CEZAR"
    let foodCellsText = document.createElement("p")
    foodCellsText.textContent = "Romaine salad, dressing, croutons, parmesan"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

}