const app = angular.module('MomsWebsite', ['ngRoute']);

app.controller('MainController', ['$route', function () {

  this.reload = () => {
    location.reload();
  };

}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

$locationProvider.html5Mode({ enabled: true });

$routeProvider.when('/', {
  templateUrl: 'home.html',
  controller: 'MainController',
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
