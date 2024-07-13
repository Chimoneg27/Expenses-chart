const url = 'https://raw.githubusercontent.com/Chimoneg27/Expenses-chart/main/data.json'
let days = []
let prices = []
let colors = ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)' ,'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)']

fetch(url)
    .then(res => res.json())
    .then(data => 
        {for(let i = 0; i < data.length; i++) {
            days.push(data[i].day)
            prices.push(data[i].amount)
        }

        let barChart = document.getElementById('myChart')

        new Chart(barChart, {
            type: 'bar',
            data: {
                labels: days,
                datasets: [{
                    backgroundColor: colors,
                    data: prices
                }]
            },
            options: {
                legend: {display: false}
            }
        })
    }
    )