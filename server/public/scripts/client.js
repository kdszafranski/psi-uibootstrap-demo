var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        })
        .when('/other', {
            templateUrl: '/views/templates/other.html',
            controller: 'OtherController',
            controllerAs: 'oc'
        })
        .otherwise({
            redirectTo: 'home'
        });

    $locationProvider.html5Mode(true);
}]);
