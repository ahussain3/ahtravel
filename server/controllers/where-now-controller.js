var moment = require('moment');
var model = require('../models/index.js');

module.exports.create = function (req, res) {
	console.log("Post request recieved.");
	console.log(req.body);

	var entry = new model.where_now(req.body);

	console.warn("need to do some data validation here");

	entry.save(function (err, result) {
		if (err) return console.error(err);
		else console.log("save successful");
		res.json(result);
	});
};

module.exports.list = function (req, res) {
	model.where_now.find().sort({last_updated: -1})
	.exec( function (err, results) {
		if (err) return console.error(err);
		var newRes = results.map(function(where) {
			where.updated_message = "posted " + moment(where.last_updated).fromNow();
			return where;
		});
		res.json(newRes);
	});
};

module.exports.getLast = function (req, res) {
	model.where_now.find().sort({last_updated: -1}).limit(1)
		.exec(function (err, wheres) {
			if (err) return console.error(err);
			var where = wheres[0];
			if (typeof(where) == 'undefined') return;
			where.updated_message = "updated " + moment(where.last_updated).fromNow();
			res.json(where);
			// console.log(where);
			console.log(where.message);
			console.log(where.updated_message);
	});
};