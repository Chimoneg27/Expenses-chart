// http://localhost:8000/data.json
let days = []
let prices = []
const fs = require('fs')

const budget = fs.readFileSync('../data.json', 'utf8')
console.log(budget)