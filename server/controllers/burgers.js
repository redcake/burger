// this is our friends.js file located at /server/controllers/friends.js
var mongoose = require('mongoose');
var Burgers = mongoose.model('Burger');
var User = mongoose.model('User');
// note the immediate function and the object that is returned

module.exports = (function() {
	return {
		index: function(req, res) {
    		Burgers.find({}).limit(15).populate("_user", "name").exec(function(err, results) {
       			if(err) {
         			console.log(err);
       			} else {
         			res.json(results);
       			}
			})
		},
		create: function(req, res) {
			User.findOne({name: req.body.user}, function(err, data){
				var burger = new Burgers({name: req.body.name, patty: req.body.patty, bun: req.body.bun, toppings: req.body.toppings, _user: data._id})
				burger.save(function(err) {
	      			if(err){
	        			console.log(err);
	      			} else {
	      				console.log('create')
	        			res.json(burger)
	      			}
				})	
			})
			
		},
		show: function(req, res) {
			Burgers.findOne({_id: req.body.burger}, function(err, burger){
				if(err){
					console.log(err)
				} else{
					res.json(burger)
				}
			})
		},
		voteUp: function(req, res) {
			User.findOne({name: req.body.user}, function(err, data){
				Burgers.findOne({_id: req.body.burger}, function(err, burger){
					if(err){
						console.log(err)
					} else{
						var user = data.name
						burger.votes[user] = 1
						burger.markModified('votes')
						burger.save()	
						res.json({})
					}
				})
			})
		},
		voteDown: function(req, res) {
			User.findOne({name: req.body.user}, function(err, data){
				Burgers.findOne({_id: req.body.burger}, function(err, burger){
					if(err){
						console.log(err)
					} else{
						var user = data.name
						burger.votes[user] = -1
						burger.markModified('votes')
						burger.save()
						res.json({})	
					}
				})
			})
		}
	}
})();