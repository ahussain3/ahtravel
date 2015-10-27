var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');             // log requests to the console (express4)

mongoose.connect('mongodb://localhost:27017/india');

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(morgan('dev'));                                         // log every request to the console

app.use(express.static(__dirname + '/client'));

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