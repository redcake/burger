myApp.controller("LoginController", function($location, $scope, $cookies, LoginFactory){
	$scope.newUser = {};

	$scope.userName = $cookies.get("user");
	console.log($scope.userName)
	$scope.create = function(newUser){
		LoginFactory.create($scope.newUser, function(output){
			$scope.newUser = {};
			if(output.message=="wrong password or username is already taken") {
				$scope.output = output
			} else{
				$location.path('main')
			}
			if($scope.userName == null){
				$cookies.put("user", output.name);
				console.log($scope.userName);
			}
		})
	}
})