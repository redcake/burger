var users = require('./../controllers/users.js');
var burgers = require('./../controllers/burgers.js');
// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all users)
	app.get('/burgers', function(req, res) {
  		burgers.index(req, res);
	});
	app.post('/burger/new', function(req, res){
		console.log(req.body)
		burgers.create(req, res);
	})
	app.get('/burger/show/:id', function(req, res) {
		burgers.show(req, res);
	})
	app.patch('/burgers/voteUp', function(req, res) {
		burgers.voteUp(req, res);
	})
	app.patch('/burgers/voteDown', function(req, res) {
		burgers.voteDown(req, res);
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