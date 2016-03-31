var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html',
        controller: "LoginController"
    })
    .when('/main',{
        templateUrl: 'partials/main.html',
        controller: "MainController"
    })
    .when('/survey/:id',{
        templateUrl: 'partials/survey.html'
    })
    .when('/create',{
    	templateUrl: 'partials/create.html'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
});