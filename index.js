let $startDate = '2013-09-01';
let $endDate = '2013-09-05';
let $currency = 'USD';
let url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start='+ $startDate + '&end=' +$endDate;
getData();

//async await method
async function getData(){
    const response = await fetch(url);
    const result = await response.json();
    // Object.values to get prices from JSON
    const prices = Object.values(result.bpi);
    // Object.keys to get keys from JSON
    const dates = Object.keys(result.bpi)
    console.log(dates)
    console.log(prices)
    chartData([$currency, ...prices], ['x', ...dates]);
}

function chartData(prices, dates){
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'x',
            columns: [
                dates,
                prices
            ]
        },

        axis: {
            x: {
                label: 'Date',
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            },
            y: {
                label: $currency,
                tick: {
                    format: d3.format('$,')
                }
            }
        },

    });

}

$('#startGraph').on('click', function(){
$startDate = $('#start').val();
$endDate = $('#end').val();
$currency = $('#curr').val();
url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start='+ $startDate + '&end=' +$endDate + '&currency=' + $currency;
    // console.log($startDate, $endDate);
    getData();
});

$('#month').on('click', function(){
    url = 'https://api.coindesk.com/v1/bpi/historical/close.json?index=[USD/CNY]';
    getData();
});

$('#yesterday').on('click', function(){
    url = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
    getData();
    
    
});