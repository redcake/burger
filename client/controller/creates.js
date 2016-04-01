myApp.controller("CreateController", function($location, $scope, $cookies, $interval, $timeout, LoginFactory, CreateFactory){
	$scope.newBurger = {}
	$scope.userName = $cookies.get("user");
	$scope.message = {}
	$scope.toppings = ['Ranch', 'Mayo', 'Ketchup', 'Musterd', 'GMO Infused', 'Mushrooms', 'Cheader', 'leaf', 'Avocado'];
	$scope.selection = [];
	$scope.logout = function(){
		$cookies.remove("user")
		$location.path("dashboard")
	}
	$(document).ready(function() {
	    // Select - Single
	    $('select').material_select();
	});
	$scope.create = function(newBurger){
		$scope.newBurger.user = $scope.userName;
		$scope.newBurger.toppings = $scope.selection;
		CreateFactory.create($scope.newBurger, function(output){
			console.log(output)
			if(output == 'YOUR BURGER IS NOT COMPLEATE'){
				console.log()
				
			} else{
				$scope.newBurger = {}
				$location.path("main")	
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
