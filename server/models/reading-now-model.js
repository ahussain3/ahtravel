var mongoose = require('mongoose');

module.exports = mongoose.model('Reading_Now', {
	book: {
		type: String
	  , default: ""
	  , required: true},
	last_updated: { 
		type: Date
	  , default: Date.now },
	updated_message: { 
		type: String
	  , default: ""}
});
