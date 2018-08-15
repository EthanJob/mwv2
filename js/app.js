const app = angular.module('MomsWebsite', ['ngRoute']);

app.controller('HomeController', ['$route', function () {

  this.reload = () => {
    location.reload();
  };

}]);

app.controller('DessertController', ['$route', function () {

}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

$locationProvider.html5Mode({ enabled: true });

$routeProvider.when('/home', {
  templateUrl: 'home.html',
  controller: 'HomeController',
  controllerAs: 'ctrl'
});

$routeProvider.when('/dessert', {
  templateUrl: 'dessert.html'
});

}]);
