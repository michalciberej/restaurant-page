import pizzaTwo from "./img/pizzaTwo.jpg"
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

    let foodContainer = document.createElement("div")
    foodContainer.classList.add("foodContainer")
    content.appendChild(foodContainer)

    let foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    let foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD IPSUM"
    let foodCellsText = document.createElement("p")
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD IPSUM"
    foodCellsText = document.createElement("p")
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD IPSUM"
    foodCellsText = document.createElement("p")
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD IPSUM"
    foodCellsText = document.createElement("p")
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD IPSUM"
    foodCellsText = document.createElement("p")
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsHeading.textContent = "SALAD IPSUM"
    foodCellsText = document.createElement("p")
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainer.appendChild(foodCells)

    const pizzaImgContainer = document.createElement("div")
    pizzaImgContainer.setAttribute("id", "pizzaImgContainer")
    content.appendChild(pizzaImgContainer)

    const pizzaImg = document.createElement("img")
    pizzaImg.classList.add("pizzaImg")
    pizzaImg.src = pizzaTwo
    pizzaImgContainer.appendChild(pizzaImg)

    const pizzaContainer = document.createElement("div")
    pizzaContainer.classList.add("pizzaContainer")
    pizzaImgContainer.appendChild(pizzaContainer)

    const pizzaText = document.createElement("p")
    pizzaText.textContent = "PIZZAS"
    pizzaText.classList.add("pizzaText")
    pizzaContainer.appendChild(pizzaText)

    const foodContainerTwo = document.createElement("div")
    foodContainerTwo.setAttribute("id", "foodContainerTwo")
    content.appendChild(foodContainerTwo)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    foodCells = document.createElement("div")
    foodCells.classList.add("foodCells")
    foodCellsHeading = document.createElement("h2")
    foodCellsText = document.createElement("p")
    foodCellsHeading.textContent = "PIZZA IPSUM"
    foodCellsText.textContent = "lorem, ipsum, lorem, ipsum, lorem, ipsum"
    foodCells.appendChild(foodCellsHeading)
    foodCells.appendChild(foodCellsText)
    foodContainerTwo.appendChild(foodCells)

    const footer = document.createElement("#div")
    footer.setAttribute("id", "footer")
    content.appendChild(footer)
    
}