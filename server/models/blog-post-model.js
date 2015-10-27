var mongoose = require('mongoose');

module.exports = mongoose.model('Blog_Post', {
	title: {
		type: String
  	  , required: true},
	short_description: {
		type: String
	  , required: true},
	link: {
		type: String
	  , required: true},
	last_updated: { 
		type: Date
	  , default: Date.now },
	updated_message: { 
		type: String
	  , default: ""}
});
