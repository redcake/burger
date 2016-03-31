// this is our friends.js file located at /server/controllers/friends.js
var mongoose = require('mongoose');
var Burgers = mongoose.model('Burger');
// note the immediate function and the object that is returned

module.exports = (function() {
	return {
		index: function(req, res) {
    		Burgers.find({}, function(err, results) {
       			if(err) {
         			console.log(err);
       			} else {
         			res.json(results);
       			}
			})
		},
		create: function(req, res) {
			var burger = new Burgers({name: req.body.name})
			burger.save(function(err) {
      			if(err){
        			console.log("something went wrong");
      			} else {
      				console.log('create')
        			res.json(burger)
      			}
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
			Burgers.findOne({_id: req.body.burger}, function(err, burger){
				if(err){
					console.log(err)
				} else{
					var user = 
					burger.votes.user = 1	
				}
			})
		},
		voteDown: function(req, res) {
			Burgers.findOne({_id: req.body.burger}, function(err, burger){
				if(err){
					console.log(err)
				} else{
					var user = 
					burger.votes.user = -1	
				}
			})
		}
	}
})();