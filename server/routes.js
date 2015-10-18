var whereNowController = require('./controllers/where-now-controller.js');
var whereNextController = require('./controllers/where-next-controller.js');
var metRecController = require('./controllers/met-recent-controller.js');

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

	// application --------
	app.get('/', function (req, res) {
		res.sendFile(viewDir + "index.html");
	});
};
