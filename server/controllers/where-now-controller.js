var moment = require('moment');
var model = require('../models/index.js');

function preparePacket (packet) {
	var newPacket = packet;
	newPacket.updated_message = "updated " + moment(packet.last_updated).fromNow();
	return newPacket;
};

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
		var newRes = results.map(preparePacket);
		res.json(newRes);
	});
};

module.exports.getLast = function (req, res) {
	model.where_now.find().sort({last_updated: -1}).limit(1)
		.exec(function (err, packets) {
			if (err) return console.error(err);
			var packet = packets[0];
			if (typeof(packet) == 'undefined') return;
			res.json(preparePacket(packet));
			// console.log(where);
			console.log(packet.message);
			console.log(packet.updated_message);
	});
};