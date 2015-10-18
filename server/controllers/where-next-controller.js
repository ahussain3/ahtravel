var moment = require('moment');
var model = require('../models/index.js');

module.exports.create = function (req, res) {
	console.log("Post request recieved.");
	console.log(req.body);

	var entry = new model.where_next(req.body);

	console.warn("need to do some data validation here");

	entry.save(function (err, result) {
		if (err) return console.error(err);
		else console.log("save successful");
		res.json(result);
	});
};

function prepareObject (where) {
	var newWhere = where;
	newWhere.updated_message = "posted " + moment(where.last_updated).fromNow();
	if (where.leave_date) {
		newWhere.leave_date_message = moment(where.leave_date).startOf('day').fromNow();
	} else {
		newWhere.leave_date = "but I haven't set a date yet";
	}
	return newWhere;
};

module.exports.list = function (req, res) {
	model.where_next.find().sort({last_updated: -1})
	.exec( function (err, results) {
		if (err) return console.error(err);
		var newRes = results.map(function(where) {
			where.updated_message = "posted " + moment(where.last_updated).fromNow();
			if (where.leave_date) {
				where.leave_date_message = moment(where.leave_date).startOf('day').fromNow();
			} else {
				where.leave_date = "but I haven't set a date yet";
			}
			return where;
		});
		res.json(newRes);
	});
};

module.exports.getLast = function (req, res) {
	model.where_next.find().sort({last_updated: -1}).limit(1)
		.exec(function (err, wheres) {
			if (err) return console.error(err);
			var where = wheres[0];
			if (typeof(where) == 'undefined') return;
			where.updated_message = "updated " + moment(where.last_updated).fromNow();
			if (where.leave_date) {
				where.leave_date_message = moment(where.leave_date).startOf('day').fromNow();
			} else {
				where.leave_date = "but I haven't set a date yet";
			}
			res.json(where);
			// console.log(where);
			console.log(where.message);
			console.log(where.updated_message);
			console.log(where.leave_date);
			console.log(where.leave_date_message);
	});
};