var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController as hc'
        })
        .when('/alert', {
            templateUrl: '/views/templates/alerts.html',
            controller: 'AlertController as ac'
        })
        .when('/modal', {
            templateUrl: '/views/templates/modal.html',
            controller: 'ModalController as mc'
        })
        .otherwise({
            redirectTo: 'home'
        });

    $locationProvider.html5Mode(true);
}]);
