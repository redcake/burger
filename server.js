// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./server/config/mongoose.js'); //must go before routes requirement
require('./server/config/routes.js')(app);
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")))
// set up a static file server that points to the "client" directory
app.listen(9700, function() {
  console.log('cool stuff on: 9700');
});
