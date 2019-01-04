var express = require('express');
var bodyParser  = require("body-parser");
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(__dirname ));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


module.exports = {app};