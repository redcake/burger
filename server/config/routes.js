var users = require('./../controllers/users.js');
var burgers = require('./../controllers/burgers.js');
// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all users)
	app.get('/landing', function(req, res) {
  		burgers.index(req, res);
	});
	app.get('/burger/show/:id', function(req, rea) {
		burgers.show(req, res);
	})


	//users
	app.get('/user/login', function(req, res) {
		users.login(req, res)
	})
	app.post('/user/new', function(req, res) {
		users.create(req, res);
	});

	//polls
}