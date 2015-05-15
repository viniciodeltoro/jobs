var app = angular.module('jobsApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
 .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });
  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});

function MainCtrl () {
  var vm = this;
}