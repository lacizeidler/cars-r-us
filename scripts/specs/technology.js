import { getTechnology, setTechnology } from "../database.js";

const technologies = getTechnology()

document.addEventListener (
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const tech = () => {
    let html = ""
    html += `<select id="tech">
    <option value = "0" >Select a technology package:</option>`
    for (const techObj of technologies) {
        html += ` 
        <option value = "${techObj.id}" >${techObj.technologyPackage}</option>
        `
    }
    html += "</select>"
    return html
}