'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homepageApp
 */
angular.module('homepageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'AngularJS',
      'Karma'
    ];
  });
