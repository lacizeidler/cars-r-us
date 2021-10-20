const database = {
    paintColor: [
        {
            id: 1,
            color: "Silver",
            price: 5000
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 2500
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 8000
        },
        {
            id: 4,
            color: "Spring Green",
            price: 3600
        }
    ],
    interior: [
        {
            id: 1,
            fabric: "Beige Fabric",
            price: 300
        },
        {
            id: 2,
            fabric: "Charcoal Fabric",
            price: 500
        },
        {
            id: 3,
            fabric: "White Leather",
            price: 900
        },
        {
            id: 4,
            fabric: "Black Leather",
            price: 800
        }
    ],
    technology: [
        {
            id: 1,
            technologyPackage: "Basic Package",
            price: 450
        },
        {
            id: 2,
            technologyPackage: "Navigation Package",
            price: 400
        },
        {
            id: 3,
            technologyPackage: "Visibility Package",
            price: 300
        },
        {
            id: 4,
            technologyPackage: "Ultra Package",
            price: 650
        }
    ],
    wheels: [
        {
            id: 1,
            wheelSpecs: "17-inch Pair Radial",
            price: 500
        },
        {
            id: 2,
            wheelSpecs: "17-inch Pair Radial Black",
            price: 550
        },
        {
            id: 3,
            wheelSpecs: "18-inch Pair Spoke Silver",
            price: 400
        },
        {
            id: 4,
            wheelSpecs: "18-inch Pair Spoke Black",
            price: 450
        }
    ]
}

export const getPaintColors = () => {
    return database.paintColor.map(color => ({...color}))
}
export const getInterior = () => {
    return database.interior.map(fabric => ({...fabric}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}