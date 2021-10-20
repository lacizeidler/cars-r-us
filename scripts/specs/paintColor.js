import { getPaintColors } from "../database.js";

const paintColors = getPaintColors()

document.addEventListener (
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            const chosenPaint = changeEvent.target.value
            console.log(chosenPaint)
        }
    }
)

export const Paint = () => {
    let html = ""
    for (const paintObj of paintColors) {
        html += `
        <select id = "color"> 
        <option value = "${paintObj.id}" >${paintObj.color}</option>
        </select>
        `
    }
    return html
}