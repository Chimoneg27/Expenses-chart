const url = 'https://raw.githubusercontent.com/Chimoneg27/Expenses-chart/main/data.json'
let days = []
let prices = []

fetch(url)
    .then(res => res.json())
    .then(data => 
        {for(let i = 0; i < data.length; i++) {
            days.push(data[i].day)
            prices.push(data[i].amount)
        }
    console.log(days)
    }
    )