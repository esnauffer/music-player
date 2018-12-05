// import the required modules 
var express = require("express");
var fs = require('fs');

// initialize an express app
var app = express();

// declare public directory to be used as a store for static files
app.use('/public', express.static(__dirname + '/public'));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});