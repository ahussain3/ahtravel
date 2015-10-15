var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var moment = require('moment');

mongoose.connect('mongodb://localhost:27017/india');

app.use(bodyParser.json());
// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Models
app.models = require('./server/models/index.js');

// Routes
var routes = require('./server/routes.js')(app);

app.listen(port, function () {
	console.log("I'm listening (on " + port + ")...");
});