var moment = require('moment');
var model = require('../models/index.js');

function preparePacket (packet) {
	var newPacket = packet;
	newPacket.updated_message = "updated " + moment(packet.last_updated).fromNow();
	if (packet.leave_date) {
		newPacket.leave_date_message = moment(packet.leave_date).startOf('day').fromNow();
	} else {
		newPacket.leave_date = "but I haven't set a date yet";
	}
	return newPacket;
};

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

module.exports.list = function (req, res) {
	model.where_next.find().sort({last_updated: -1})
	.exec( function (err, results) {
		if (err) return console.error(err);
		var newRes = results.map(preparePacket);
		res.json(newRes);
	});
};

module.exports.getLast = function (req, res) {
	model.where_next.find().sort({last_updated: -1}).limit(1)
		.exec(function (err, packets) {
			if (err) return console.error(err);
			var packet = packets[0];
			if (typeof(packet) == 'undefined') return;
			res.json(preparePacket(packet));


			// console.log(where);
			console.log(packet.message);
			console.log(packet.updated_message);
			console.log(packet.leave_date);
			console.log(packet.leave_date_message);
	});
};