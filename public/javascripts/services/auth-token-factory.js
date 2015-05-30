'use strict';
angular.module('jobsApp').factory('authTokenFactory', authTokenFactory);
authTokenFactory.$inject = ['$window'];
function authTokenFactory($window) {
  var store = $window.localStorage;
  var key = 'X-Auth-Token-Id';
  
  var service = {
      getToken: getToken,
      setToken: setToken
  };
  return service;

  function getToken() {
    return store.getItem(key);
  }
  function setToken(token) {
    if(token)
      store.setItem(key, token);
    else
      store.removeItem(key);
  }
}