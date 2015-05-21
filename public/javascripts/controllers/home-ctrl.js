'use strict';
angular.module('jobsApp').controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject = ['sessionService'];

function HomeCtrl (sessionService) {
  var vm = this;
  vm.login = login;

  function login () {

  }
}