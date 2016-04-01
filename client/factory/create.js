myApp.factory("CreateFactory", function($http){
	var factory = {};
	var burger = {};
    factory.create = function(info, callback) {
    	console.log(info)
        $http.post('/burger/new', info).success(function(output) {
            user = output
            callback(user)
        })     
    }
	return factory
})