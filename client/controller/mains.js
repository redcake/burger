myApp.controller("MainController", function($location, $scope, $cookies, LoginFactory, MainFactory){
	$scope.vote = {};
	$scope.burgers = {};
	$scope.userName = $cookies.get("user");
	MainFactory.index(function(data){
		$scope.burgers = data;
		for (var i = 0; i<$scope.burgers.length; i++){
			$scope.burgers[i].total = sum($scope.burgers[i].votes);
		}
		console.log($scope.burgers);
	})
	function sum(votes){
		var sum = 0;
		for( var el in votes ) {
			if( votes.hasOwnProperty( el ) ) {
				sum += parseFloat( votes[el] );
			}
			}
		return sum;
	}
	
	$scope.logout = function(){
		$cookies.remove("user");
		$location.path("dashboard");
	}
	$scope.voteUp = function(burger){
		$scope.vote.burger = burger._id;
		$scope.vote.user = $scope.userName;
		MainFactory.voteUp($scope.vote, function(){
			$scope.vote = {};
			MainFactory.index(function(data){
				$scope.burgers = data;
				for (var i = 0; i<$scope.burgers.length; i++){
					$scope.burgers[i].total = sum($scope.burgers[i].votes);
				}
				console.log($scope.burgers);
			})
		})
	}
	$scope.voteDown = function(burger){
		$scope.vote.burger = burger._id;
		$scope.vote.user = $scope.userName;
		MainFactory.voteDown($scope.vote, function(){
			$scope.vote = {};
			MainFactory.index(function(data){
				$scope.burgers = data;
				for (var i = 0; i<$scope.burgers.length; i++){
					$scope.burgers[i].total = sum($scope.burgers[i].votes);
				}
				console.log($scope.burgers);
			})
		})
	}
})