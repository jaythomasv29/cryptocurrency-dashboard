# cryptocurrency-dashboard
A front-end cryptocurrency dashboard using html, css, javascript, jquery, and d3/c3.js data visualization.
## ABOUT THE APP
cryptocurrency-dashboard is a dashboard that charts data from coindesk's BPI (Bitcoin Price Index) data. The front-end is accomplished by using the following:
* Bootstrap (CSS framework)
* d3.js & c3.js data visualization framework (c3 enables quick generating of D3-based charts. Code is wrapped and allows reusability)
* Javascript/JQuery
* HTML
* CSS
## About the data
Bitcoin's price index is charted and the user is able to see a time-series graph in whichever times period they specify. All major currencies are available for viewing. Furthermore, the data is also dynamically populated in a data table using JQuery and adapts to whichever query the user chooses.

## Notable methodology
* `Async/Await` API Call: “Async” keyword directs JavaScript to automatically wrap that value in a resolved promise. Makes JavaScript wait until that promise settles and returns its result.
* `Object.keys`: Method returns an array of a given object's own property names.
* `Object.values`: Method returns an array of a given object's values.
