'use strict';
angular.module('jobsApp').factory('sessionService', sessionService);
sessionService.$inject = ['$http', 'authTokenFactory'];
function sessionService($http, authTokenFactory) {
  var someValue = '';
  var service = {
      someValue: someValue,
      validateCredentials: validateCredentials,
      logout: logout
  };
  return service;

  function validateCredentials(userName, password) {
    return $http.post('/sessions', {
      userName: userName,
      password: password
    });
  }

  function logout () {
    authTokenFactory.setToken();
  }

}