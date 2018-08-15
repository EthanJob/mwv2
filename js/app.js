const app = angular.module('MomsWebsite', ['ngRoute']);

app.controller('HomeController', ['$route', function () {

}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

$locationProvider.html5Mode({ enabled: true });

$routeProvider.when('/', {
  templateUrl: 'pages/home.html',
  controller: 'HomeController',
  controllerAs: 'ctrl'
});

}]);
