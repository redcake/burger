myApp.controller("MainController", function($location, $scope, $cookies, LoginFactory){
	$scope.userName = $cookies.get("user");
	$scope.logout = function(){
		$cookies.remove("user")
		$location.path("dashboard")
	}
})