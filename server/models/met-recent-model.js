var mongoose = require('mongoose');

module.exports = mongoose.model('Met_Recent', {
	message: {
		type: String
	  , default: ""
	  , required: true},
	short_message : {
		type: String },
	last_updated: { 
		type: Date
	  , default: Date.now },
	updated_message: { 
		type: String
	  , default: ""}
});
