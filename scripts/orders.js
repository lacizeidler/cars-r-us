import { getOrders, getInterior, getPaintColors, getWheels, getTechnology } from "./database.js"

const buildOrderListItem = (order) => {
    const interiors = getInterior()
    const paintColors = getPaintColors()
    const wheels = getWheels()
    const technologies = getTechnology()

    // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundPaintColors= paintColors.find(
        (paint) => {
            return paint.id === order.colorId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const foundTechnologies = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const initialCost = foundInterior.price + foundPaintColors.price + foundWheels.price
    const totalCost = initialCost + foundTechnologies.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}