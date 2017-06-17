var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan"); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 5050;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.listen(port, function(){
    console.log(`Server listening on port ${port}`);
});