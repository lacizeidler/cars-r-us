import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
import { interior } from "./specs/interior.js"
import { Paint } from "./specs/paintColor.js"
import { tech } from "./specs/technology.js"
import { wheels } from "./specs/wheels.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)



export const cars_r_us = () => {
    return `
    <article class="choices">
    <section class="choices__colors">
    <h2>Colors</h2>
        ${Paint()}
    </section>
    <section class="choices__interior">
        <h2>Interior</h2>
        ${interior()}
    </section>
    <section class="choices__technology">
        <h2>Technology</h2>
        ${tech()}
    </section>
    <section class="choices__wheels">
        <h2>Wheels</h2>
        ${wheels()}
    </section>
</article>

    <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}