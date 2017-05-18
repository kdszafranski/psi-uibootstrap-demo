var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController as hc'
        })
        .when('/alerts', {
            templateUrl: '/views/templates/alerts.html',
            controller: 'AlertsController as ac'
        })
        .otherwise({
            redirectTo: 'home'
        });

    $locationProvider.html5Mode(true);
}]);
