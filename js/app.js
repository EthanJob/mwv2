const app = angular.module('MomsWebsite', ['ngRoute']);

app.controller('HomeController', ['$route', function () {

  this.reload = () => {
    location.reload();
  };

}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

$locationProvider.html5Mode({ enabled: true });

$routeProvider.when('/', {
  templateUrl: 'pages/home.html',
  controller: 'HomeController',
  controllerAs: 'ctrl'
});

$routeProvider.when('/dessert', {
  templateUrl: 'pages/dessert.html',
  controller: 'DessertController',
  controllerAs: 'ctrl'
});

}]);
