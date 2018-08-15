const app = angular.module('MomsWebsite', ['ngRoute']);

app.controller('HomeController', ['$route', function () {

}]);

app.controller('DessertController', ['$route', function () {

}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

$locationProvider.html5Mode({ enabled: true });

$routeProvider.when('/', {
  templateUrl: 'home.html',
  controller: 'HomeController',
  controllerAs: 'ctrl'
});

$routeProvider.when('/lunch', {
  templateUrl: 'lunch.html'
});

$routeProvider.when('/dinner', {
  templateUrl: 'dinner.html'
});

$routeProvider.when('/dessert', {
  templateUrl: 'dessert.html'
});

}]);
