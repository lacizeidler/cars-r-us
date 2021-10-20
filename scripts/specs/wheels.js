import { getWheels, setWheels } from "../database.js";

const wheelOptions = getWheels()

document.addEventListener (
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
           setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const wheels = () => {
    let html = ""
    html += `<select id="wheel">
    <option value = "0" >Select a wheel:</option>`

    for (const wheelObj of wheelOptions) {
        html += ` 
        <option value = "${wheelObj.id}" >${wheelObj.wheelSpecs}</option>
        `
    }
    html += "</select>"
    return html
}