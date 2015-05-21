'use strict';
angular.module('jobsApp').controller('LoginCtrl', LoginCtrl);
LoginCtrl.$inject = ['sessionService'];

function LoginCtrl (sessionService) {
  var vm = this;
  vm.login = login;
  vm.credentials = {};
  
  function login () {
    sessionService.validateCredentials(vm.credentials.username, vm.credentials.password)
  }
}