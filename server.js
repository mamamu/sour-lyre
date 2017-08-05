
var express = require('express');
var app = express();
var tm = require("./timemodule.js")


app.use(express.static('public'));

//loading with no route/query you get the index view
app.get("/", function (request, response){
  response.sendFile(__dirname + '/views/index.html');  
})

//when the view above is loaded, this gets called by client.js to get the list of dates
app.get("/dates", function (request, response) {
  response.send(dates);
});

//here we get the string and use the timemodule to return appropriate response
app.get("/:datestring", function (request, response) {  
    var requested=(request.params.datestring);    
    response.writeHead(200, {"Content-Type": "application/json"});    
    response.end(tm(requested));     
});

// Keeping this and the function in client because it's easier than adding the html for each
var dates = [
  "Jan 22, 2017",
  "July 4, 1976",
  "1450137600",
  "481161600",
  "oct 1 92",
  "February 31, 2011",
  "NotADate"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
