'use strict';
angular.module('jobsApp').factory('sessionService', sessionService);
sessionService.$inject = ['$http'];
function sessionService($http) {
  var someValue = '';
  var service = {
      someValue: someValue,
      validateCredentials: validateCredentials
  };
  return service;

  function validateCredentials(userName, password) {
    return $http.get('/sessions')
        .then(validationComplete)
        .catch(validationFailed);

    function validationComplete(response) {
        return response.data.results;
    }

    function validationFailed(error) {
        logger.error('XHR Failed for getAvengers.' + error.data);
    }
  }
}