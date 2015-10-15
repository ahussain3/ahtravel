var moment = require('moment');
var WhereNow = require('../models/where-now-model.js');

module.exports.create = function (req, res) {
	console.log("Post request recieved.");
	console.log(req.body);

	var entry = new WhereNow(req.body);

	entry.save(function (err, result) {
		if (err) return console.error(err);
		else console.log("save successful");
		res.json(result);
	});
};

module.exports.list = function (req, res) {
	WhereNow.find({}, function (err, results) {
		res.json(results);
	});
};

module.exports.getLast = function (req, res) {
	WhereNow.findOne( function (err, where) {
		if (err) return console.error(err);
		where.updated_message = "updated " + moment(where.last_updated).fromNow();
		res.json(where);
		// console.log(where);
		console.log(where.message);
		console.log(where.updated_message);
	});
};