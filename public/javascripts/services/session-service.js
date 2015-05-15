(function () {
  'use strict';

  angular.module('jobsApp').factory('sessionService', sessionService);

  function sessionService() {
    var someValue = '';
    var service = {
        save: save,
        someValue: someValue,
        validate: validate,
        validateCredentials: validateCredentials
    };
    return service;

    ////////////

    function save() {
      /* */
    };

    function validate() {
      /* */
    };

    function validateCredentials() {
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
})