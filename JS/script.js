// http://localhost:8000/data.json
let days = []
let prices

fetch('http://localhost:8000/data.json')
    .then(response => response.json())
    .then((data) =>
        {for(let i = 0; i < data.length;  i++) {
            days.push(data[i].day)
            prices.push(data[i].amount)
        }}
    )