'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ui.bootstrap'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/calculate-age', {templateUrl: 'components/calcage/calcage-view.html',   controller: 'CalcAgeCtrl'})
  .otherwise({ redirectTo: '/calculate-age' });

}]);
