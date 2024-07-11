// this file is used to convert json into usable js code
const data = require('../data.json')
console.log(data)

let days = []
let prices = []

for(let i = 0; i < data.length; i++){
    days.push(data[i].day)
    prices.push(data[i].amount)
}

console.log(days)
console.log(prices)

export {days, prices};