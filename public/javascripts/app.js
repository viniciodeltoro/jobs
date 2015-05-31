/* global angular */
angular.module('jobsApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
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
}]);

angular.module('jobsApp').controller('MainCtrl', MainCtrl);

function MainCtrl () {
  var vm = this;
}