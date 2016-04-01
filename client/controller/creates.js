myApp.controller("CreateController", function($location, $scope, $cookies, LoginFactory, CreateFactory){
	$scope.newBurger = {}
	$scope.userName = $cookies.get("user");
	$scope.message = {}
	$scope.toppings = ['Ranch', 'Ketchup', 'GMO Infused'];
	$scope.selection = [];
	$scope.logout = function(){
		$cookies.remove("user")
		$location.path("dashboard")
	}
	$scope.create = function(newBurger){
		$scope.newBurger.user = $scope.userName;
		$scope.newBurger.toppings = $scope.selection;
		CreateFactory.create($scope.newBurger, function(output){
			console.log(output)
			if(output == undefined){
				console.log($scope.newBurger)
				$scope.newBurger = {}
				$location.path("main")	
			} else{
				$scope.message = output
			}
		})
	}	
	// toggle selection for a given fruit by name
	$scope.toggleSelection = function toggleSelection(TopName) {
		var idx = $scope.selection.indexOf(TopName);

	// is currently selected
		if (idx > -1) {
			$scope.selection.splice(idx, 1);
		}

	// is newly selected
		else {
			$scope.selection.push(TopName);
		}
	};
})
