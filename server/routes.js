var whereNowController = require('./controllers/where-now-controller.js');
var whereNextController = require('./controllers/where-next-controller.js');
var metRecController = require('./controllers/met-recent-controller.js');
var readNowController = require('./controllers/reading-now-controller.js');
var journalEntryController = require('./controllers/journal-entry-controller.js');
var blogPostController = require('./controllers/blog-post-controller.js');
var somethingBigController = require('./controllers/something-big-controller.js');
var somethingSmallController = require('./controllers/something-small-controller.js');

var path = require('path');

var viewDir = path.join(__dirname, "../client/views/");

module.exports = function(app) {

	// api --------------
	app.post('/api/where_now', whereNowController.create);
	app.get('/api/where_now', whereNowController.getLast);
	app.get('/api/where_now_list', whereNowController.list);

	app.post('/api/where_next', whereNextController.create);
	app.get('/api/where_next', whereNextController.getLast);
	app.get('/api/where_next_list', whereNextController.list);

	app.post('/api/met_recent', metRecController.create);
	app.get('/api/met_recent', metRecController.getLast);
	app.get('/api/met_recent_list', metRecController.list);

	app.post('/api/reading_now', readNowController.create);
	app.get('/api/reading_now', readNowController.getLastFewBooks);
	app.get('/api/reading_now_list', readNowController.list);

	app.post('/api/journal_entry', journalEntryController.create);
	app.get('/api/journal_entry', journalEntryController.getLast);
	app.get('/api/journal_entry_list', journalEntryController.list);

	app.post('/api/blog_post', blogPostController.create);
	app.get('/api/blog_post', blogPostController.getLast);
	app.get('/api/blog_post_list', blogPostController.list);

	app.post('/api/something_big', somethingBigController.create);
	app.get('/api/something_big', somethingBigController.getLast);
	app.get('/api/something_big_list', somethingBigController.list);

	app.post('/api/something_small', somethingSmallController.create);
	app.get('/api/something_small', somethingSmallController.getLast);
	app.get('/api/something_small_list', somethingSmallController.list);

	// application --------
	app.get('/', function (req, res) {
		res.sendFile(viewDir + "index.html");
	});
};
