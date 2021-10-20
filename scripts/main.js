import { cars_r_us } from "./cars-r-us.js";

const mainContainer = document.querySelector("#main-container")

const renderAllHTML = () => {
mainContainer.innerHTML = cars_r_us()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
