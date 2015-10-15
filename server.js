var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var moment = require('moment');
var whereNowController = require('./server/controllers/where-now-controller.js');

mongoose.connect('mongodb://localhost:27017/india');

app.use(bodyParser.json());
// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/client/views/index.html");
	console.log("you requested the homepage.");
});

app.post('/api/where_now', whereNowController.create, function () {
	console.log("Post request recieved.");

});
app.get('/api/where_now', whereNowController.getLast);
app.get('/api/where_now_list', whereNowController.list);

app.listen(3000, function () {
	console.log("I'm listening (on 3000)...");
});


// var db = mongoose.connection;
// db.once('open', function (callback) {
 //  	var where_now_schema = mongoose.Schema({
	//     message: String,
	//     last_updated: Date //{ type: Date, default: Date.now }
	// });

// 	kittySchema.methods.speak = function () {
// 	  var greeting = this.name
// 	    ? "Meow name is " + this.name.full
// 	    : "I don't have a name";
// 	    greeting += " and I am " + this.age + " years old.";
// 	  console.log(greeting);
// 	}

	// var Where_Now_Obj = mongoose.model('Where_Now', where_now_schema);

	// var test = new Where_Now_Obj({
	// 	message: "London, UK", 
	// 	last_updated: Date.now()
	// });

	// test.save(function(err, test) {
	// 	if (err) return console.error(err);
	// 	else console.log("save successful");
	// });

	// Where_Now_Obj.findOne(function(err, where) {
	// 	if (err) return console.error(err);
	// 	console.log(where);
	// 	console.log(where.message);
	// 	console.log("updated " + moment(where.last_updated).fromNow());
	// });
// });