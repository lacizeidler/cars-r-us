import { getPaintColors, setPaint } from "../database.js";

const paintColors = getPaintColors()

document.addEventListener (
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)

export const Paint = () => {
    let html = ""
    html += `<select id="color">
    <option value = "0" >Select a color:</option>`
    for (const paintObj of paintColors) {
        html += ` 
        <option value = "${paintObj.id}" >${paintObj.color}</option>
        `
    }
    html += "</select>"
    return html
}