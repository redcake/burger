myApp.controller("MainController", function($location, $scope, $cookies, $interval, $timeout, LoginFactory, MainFactory){
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
	$scope.isDataSafe = function() {
            var day = new Date;
 
            return day.getDate() == 31 && day.getMonth() == 2;
        };
 
        $scope.DataIsSafe = false;
 
        $interval(function(){
            $scope.DataIsSafe = !$scope.DataIsSafe;
        }, 1000);
 
        $scope.animationFunction = function(index){
 
            var selector = '.a' + index;
            $timeout(function(){
                $(document).ready(function(){
                    animateDiv(selector);
                });
            }, 500);
 
            function makeNewPosition(){
 
                // Get viewport dimensions (remove the dimension of the div)
                var h = $(window).height() - 50;
                var w = $(window).width() - 50;
 
                var nh = Math.floor(Math.random() * h);
                var nw = Math.floor(Math.random() * w);
 
                return [nh,nw];
 
            }
 
            function animateDiv(selector){
                console.log('animate div log');
                console.log('selector: ', selector);
 
 
                var newq = makeNewPosition();
                var oldq = $(selector).offset();
                var speed = calcSpeed([oldq.top, oldq.left], newq);
 
 
 
                $(selector).animate({ top: newq[0], left: newq[1] }, speed, function(){
                    animateDiv();
                });
 
            };
 
            function calcSpeed(prev, next) {
 
                var x = Math.abs(prev[1] - next[1]);
                var y = Math.abs(prev[0] - next[0]);
 
                var greatest = x > y ? x : y;
 
                var speedModifier = 0.1;
 
                var speed = Math.ceil(greatest / speedModifier);
 
                return speed;
            };
        };
})