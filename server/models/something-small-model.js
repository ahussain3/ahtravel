var mongoose = require('mongoose');

module.exports = mongoose.model('Something_Small', {
	message: {
		type: String
	  , default: ""
	  , required: true},
	short_message: {
		type: String
	  , default: ""
	},
	last_updated: { 
		type: Date
	  , default: Date.now },
	updated_message: { 
		type: String
	  , default: ""}
});
