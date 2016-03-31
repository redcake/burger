myApp.factory("LoginFactory", function($http){
	var factory = {};
	var users = {};
	var user = {};
    factory.sesh = function(callback){
        callback(user)
    }
	factory.index = function(callback) {
		$http.get('/').success(function(output) {
			users = output;
			callback(users)
		})
	}
    factory.create = function(info, callback) {
        $http.post('/user/new', info).success(function(output) {
            user = output
            callback(user)
        })     
    }
	return factory
})