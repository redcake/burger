// this is our friends.js file located at /server/controllers/friends.js
var mongoose = require('mongoose');
var User = mongoose.model('User');
// note the immediate function and the object that is returned

module.exports = (function() {
	return {
		index: function(req, res) {
    		User.find({}, function(err, results) {
       			if(err) {
         			console.log(err);
       			} else {
         			res.json(results);
       			}
			})
		},
		create: function(req, res) {
			User.findOne({name: req.body.name}, function(err, data){
				if(data==null){
					var user = new User({name: req.body.name, password: req.body.password})
	  				user.save(function(err) {
		      			if(err){
		        			console.log("something went wrong");
		      			} else {
		      				console.log('create')
		        			res.json(user)
		      			}
		    		})
				} else {
					if(data.password==req.body.password){
						res.json(data)
					} else {
						res.json({message: "wrong password or username is already taken"})
					}
				}
			})	
		},
		show: function(req, res) {
			User.findOne({_id: req.body.user}, function(err, user){
				if(err){
					console.log(err)
				} else{
					res.json(user)
				}
			})
		}
	}
})();