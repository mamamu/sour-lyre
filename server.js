// server.js
// where your node app starts


// init project
var express = require('express');
var app = express();
var tm = require("./timemodule.js")

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response){
  response.sendFile(__dirname + '/views/index.html');  
})

// http://expressjs.com/en/starter/basic-routing.html



app.get("/dates", function (request, response) {
  response.send(dates);
});

//this is if the date string is in the querystring-adds to list and reloads page
app.get("/:datestring", function (request, response) {  
    var requested=(request.params.datestring)
    dates.push(request.params.datestring)
    //response.sendFile(__dirname + '/views/index.html');
    response.writeHead(200, {"Content-Type": "application/json"});    
    response.end(tm(requested)); 
    //console.log(request.query);
 
    //console.log(request.query);
 
});
/*
// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dates", function (request, response) {  
  dates.push(request.query.date);  
  response.sendStatus(200);   
});
*/


// Keeping this because it's easier than adding the html for each
var dates = [
  "Jan 22, 2017",
  "July 4, 1976",
  "1450137600",
  "481161600",
  "February 31, 2011",
  "NotADate"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
