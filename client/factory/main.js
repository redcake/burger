myApp.factory("MainFactory", function($http){
	var factory = {};
	var burgers = {};
    factory.index = function(callback) {
        $http.get('/burgers').success(function(output) {
            burgers = output;
            callback(burgers)
        })
    }
    factory.voteUp = function(info, callback) {
        $http.patch('/burgers/voteUp', info).success(function(){
            callback(burgers)
        })
        
    }
    factory.voteDown = function(info, callback) {
        $http.patch('/burgers/voteDown', info).success(function(){
            callback(burgers)
        })
    }
	return factory
})