const airports = require('./airports.json');

var foreignAirports = [];
for (var i = 0; i < airports.length; i++){
    if (airports[i].continent !== "NA") foreignAirports.push(airports[i]);
}
// console.log(airports.length, foreignAirports.length);

// require this file to get array of all non-north american airports