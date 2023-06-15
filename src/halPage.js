export function displayHAL() {
    const content = document.querySelector("#content")
    
    const container = document.createElement("div")
    container.setAttribute("id", "halContainer")
    content.appendChild(container)

    const hoursContainer = document.createElement("div")
    hoursContainer.setAttribute("id", "hoursContainer")
    container.appendChild(hoursContainer)

    let hoursTextOne = document.createElement("p")
    hoursTextOne.classList.add("hoursText")
    hoursTextOne.textContent = "Mon - Fri"
    hoursContainer.appendChild(hoursTextOne)

    let hoursTextTwo = document.createElement("p")
    hoursTextTwo.classList.add("hoursText")
    hoursTextTwo.textContent = "10:00 - 22:00"
    hoursContainer.appendChild(hoursTextTwo)

    let hoursTextThree = document.createElement("p")
    hoursTextThree.classList.add("hoursText")
    hoursTextThree.textContent = "Sat - Sun"
    hoursContainer.appendChild(hoursTextThree)

    let hoursTextFour = document.createElement("p")
    hoursTextFour.classList.add("hoursText")
    hoursTextFour.textContent = "12:00 - 21:00"
    hoursContainer.appendChild(hoursTextFour)

    const mapContainer = document.createElement("div")
    mapContainer.setAttribute("id", "mapContainer")
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sKoloseum!5e0!3m2!1scs!2scz!4v1686846414968!5m2!1scs!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    container.appendChild(mapContainer)
    
}