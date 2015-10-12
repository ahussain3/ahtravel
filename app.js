var mongoose = require('mongoose');
var moment = require('moment');
mongoose.connect('mongodb://localhost/india');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  	var where_now_schema = mongoose.Schema({
	    message: String,
	    last_updated: Date //{ type: Date, default: Date.now }
	});

// 	kittySchema.methods.speak = function () {
// 	  var greeting = this.name
// 	    ? "Meow name is " + this.name.full
// 	    : "I don't have a name";
// 	    greeting += " and I am " + this.age + " years old.";
// 	  console.log(greeting);
// 	}

	var Where_Now_Obj = mongoose.model('Where_Now', where_now_schema);

	var test = new Where_Now_Obj({
		message: "London, UK", 
		last_updated: Date.now()
	});

	test.save(function(err, test) {
		if (err) return console.error(err);
		else console.log("save successful");
	});

	Where_Now_Obj.findOne(function(err, where) {
		if (err) return console.error(err);
		// console.log(where);
		console.log(where.message);
		console.log("updated " + moment(where.last_updated).fromNow());
	});

// 	Kitten.findOne({"age": 4}, function(err, koda) {
// 		if (err) return console.error(err);
// 		console.log(koda.name.full);
// 		koda.speak();
// 	});

});

console.log("Hello World!");
