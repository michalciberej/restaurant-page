import { createLogo } from "./homePage";

export function displayStory() {
    const content = document.querySelector("#content")

    const storyContainer = document.createElement("div")
    storyContainer.setAttribute("id", "storyContainer")
    content.appendChild(storyContainer)

    const storyHeading = document.createElement("h1")
    storyHeading.setAttribute("id", "storyHeading")
    storyHeading.textContent = "STORY OF PIZZERIA"
    storyContainer.appendChild(storyHeading)

    const storyText = document.createElement("p")
    storyText.classList.add("storyText")
    storyText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatem inventore. Exercitationem quibusdam doloribus natus voluptates iste eveniet nesciunt possimus ex rerum aliquid vitae, a sed laborum voluptatum explicabo enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatem inventore. Exercitationem quibusdam doloribus natus voluptates iste eveniet nesciunt possimus ex rerum aliquid vitae, a sed laborum voluptatum explicabo enim!`
    storyContainer.appendChild(storyText)

    storyText.textContent = `Voluptates iste eveniet nesciunt possimus ex rerum aliquid vitae, a sed laborum voluptatum explicabo enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatem inventore. Exercitationem quibusdam doloribus natus voluptates iste eveniet nesciunt possimus ex rerum aliquid vitae, a sed laborum voluptatum explicabo enim!`
    storyContainer.appendChild(storyText)
}