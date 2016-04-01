myApp.controller("LoginController", function($location, $scope, $cookies, $interval, $timeout, LoginFactory){
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