// VOORRAAD ARRAY MET TV'S
const inventory = [{
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
        wifi: true, speech: false, hdr: true, bluetooth: false, ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
}, {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
        wifi: true, speech: false, hdr: false, bluetooth: false, ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
}, {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
        wifi: true, speech: true, hdr: true, bluetooth: true, ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
}, {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
        wifi: true, speech: true, hdr: true, bluetooth: true, ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
}, {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
        wifi: true, speech: true, hdr: true, bluetooth: true, ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
}, {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
        wifi: true, speech: false, hdr: true, bluetooth: false, ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
}, {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
        wifi: false, speech: false, hdr: false, bluetooth: false, ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
}, {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
        wifi: false, speech: false, hdr: true, bluetooth: false, ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
},];

//opdracht-1//

console.log("-----1A-----")

const tvNames = inventory.map((inventoryType) => {
    return ({"type": inventoryType.type, "name": inventoryType.name})
})

console.log(tvNames)

console.log("-----1B-----")

const tvSoldOut = inventory.filter((inventoryEmpty) => {
    return inventoryEmpty.originalStock === inventoryEmpty.sold
})

console.log(tvSoldOut)

console.log("-----1C-----")

const tvAmbiLightList = inventory.filter((inventoryAL) => {
    return inventoryAL.options.ambiLight === true
})

console.log(tvAmbiLightList)

console.log("-----1D-----")

function sortPriceLoHi(array) {
    return array.sort((a, b) => a.price - b.price)
}

sortPriceLoHi(inventory)

console.log(inventory)

//opdracht 2//
console.log("-----2A-----")

let tvSold = 0

for (let i = 0; i < inventory.length; i++) {
    tvSold = tvSold + inventory[i].sold
}

console.log(tvSold)

console.log("-----2B-----")
const numberOfSales = document.getElementById("number-of-sales")

console.log(numberOfSales)

numberOfSales.textContent = tvSold

console.log("-----2C-----")

let tvBought = 0
for (let i = 0; i < inventory.length; i++) {
    tvBought = tvBought + inventory[i].originalStock
}
console.log(tvBought)

console.log("-----2D-----")

const totalNumberBought = document.getElementById("numbers-bought")
totalNumberBought.textContent = tvBought

console.log("-----2E-----")

const numbersInStock = document.getElementById("numbers-in-stock")
numbersInStock.textContent = tvBought - tvSold

//opdracht 3//
console.log("-----3A-----")

const brandNames = inventory.map((brandName) => {
    return brandName.brand
})

console.log(brandNames)

console.log("-----3B-----")

function createlist(array) {
    const brandList = array.map((listName) => {
        return listName.brand
    })
    return brandList
}

const brandList = createlist(inventory)

console.log(brandList)

//opdracht 4//
console.log("-----4A-----")

function generateTvName(array, i) {
    return `${array[i].brand} ${array[i].type} - ${array[i].name}`
}

const tvName = generateTvName(inventory, 0)

console.log(tvName)

console.log("-----4B-----")

function generatePriceString(price) {
    return `€${price},-`
}

const tvPrice = generatePriceString(123)

console.log(tvPrice)

console.log("-----4C-----")

console.log(inventory[3].availableSizes)

function screenSize(array) {
    let sizeList = `${array[3].availableSizes[0]} inch (${array[3].availableSizes[0] * 2.54 | 0} cm)`

    for (let i = 1; i < array[3].availableSizes.length; i++) {
        sizeList = sizeList + `| ${array[3].availableSizes[i]} inch (${array[3].availableSizes[i] * 2.54 | 0} cm) `
    }
    return sizeList
}

const tvSizes = screenSize(inventory)

console.log(tvSizes)

console.log("-----4D-----")
//ik heb 4D overgeslagen//

console.log("-----4E-----")

function tvOverview(array) {
    const tvDisplay = array.map((array) => {
        let sizeList = `${array.availableSizes[0]} inch (${array.availableSizes[0] * 2.54 | 0} cm)`

        for (let i = 1; i < array.availableSizes.length; i++) {
            sizeList = sizeList + `| ${array.availableSizes[i]} inch (${array.availableSizes[i] * 2.54 | 0} cm) `
        }
        return (`${array.brand} ${array.type} - ${array.name}
€${array.price},-
${sizeList}`)
    })
    return tvDisplay
}

const listForDisplay = tvOverview(inventory)

console.log(listForDisplay)
