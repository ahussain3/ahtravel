var mongoose = require('mongoose');

module.exports = mongoose.model('Journal_Entry', {
	body_text: {
		type: String
	  , default: ""
	  , required: true},
	short_body_text: {
		type:String },
	last_updated: { 
		type: Date
	  , default: Date.now },
	updated_message: { 
		type: String
	  , default: ""}
});
