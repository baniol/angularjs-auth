'use strict';
angular.module('NgAuth')
  .controller('NavbarCtrl', function($rootScope, $scope, $message, $location, Auth) {
    $scope.logout = function() {
      $rootScope.loggedin = false;
      Auth.logout();
      $location.path('/');
      $message('You have been logged out.');
    };
  });
