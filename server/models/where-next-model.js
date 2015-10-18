var mongoose = require('mongoose');

module.exports = mongoose.model('Where_Next', {
	message: {
		type: String
	  , default: ""
	  , required: true
	},
	last_updated: { 
		type: Date
	  , default: Date.now 
	},
	updated_message: { 
		type: String
	  , default: ""
	},
	leave_date: {
		type: Date
	},
	leave_date_message: {
		type: String
	  , default: ""
	}
});
