'use strict';
angular.module('jobsApp').factory('authInterceptor', authInterceptor);
authInterceptor.$inject = ['authTokenFactory'];
function authInterceptor(authTokenFactory) {
  var service = {
    request: addToken,
  };
  return service;

  function addToken (config) {
    var token = authTokenFactory.getToken();
    if(token){
      config.headers = config.headers || {};
      config.headers['X-Auth-Token-Id'] = token;
    }
    return config;
  }
}