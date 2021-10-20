import { getInterior, setInterior } from "../database.js";

const interiorFabrics = getInterior()

document.addEventListener (
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "fabric") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const interior = () => {
    let html = ""
    html += `<select id="fabric">
    <option value = "0" >Select a fabric:</option>`
    for (const interiorObj of interiorFabrics) {
        html += `
        <option value = "${interiorObj.id}">${interiorObj.fabric}</option>
        `
    }
    html += "</select>"
    return html
}