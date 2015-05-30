'use strict';
angular.module('jobsApp').controller('LoginCtrl', LoginCtrl);
LoginCtrl.$inject = ['sessionService', 'authTokenFactory'];

function LoginCtrl (sessionService, authTokenFactory) {
  var vm = this;
  vm.login = login;
  vm.credentials = {};
  
  function login () {
    sessionService.validateCredentials(vm.credentials.username, vm.credentials.password)
    .then(function success (response) {
      authTokenFactory.setToken(response.data.token);
      return response;
    }, handleError);
  }

  function handleError (response) {
    console.log('Error' + response.data);
  }
}