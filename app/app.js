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
  .when('/calculate-age', {templateUrl: 'calcAge/view.html',   controller: 'calcAgeCtrl'})
  .otherwise({ redirectTo: '/calculate-age' });
}])
.controller('calcAgeCtrl', function ($scope, $http) {
  	$scope.format = 'dd-MMMM-yyyy';
  	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

  	$scope.dateOptions = {
	    formatYear: 'yy',
	    maxDate: new Date(),
	    datepickerMode:'month'
  	};

  	$scope.datePick = {'opened':false};


	$scope.openCalendar = function() {
	  $scope.datePick.opened = true;
	};

	$scope.calculateAge = function() {
		var birthDay = $scope.dt.getDate();
		var birthMonth = $scope.dt.getMonth()+1;
		var now = new Date().getTime();
		var milliAge = now - $scope.dt.getTime();
		$scope.displayBirthday = true;

		$scope.age = moment.duration(milliAge).humanize();
		var url = 'http://numbersapi.com/'+birthMonth+'/'+birthDay+'/date';
		console.log(url);
		$http.get(url)
		.success(function(data){
			console.log(data);
			$scope.funFact = data;
		}).error(function(data){	
			conosole.log('error with numbers api');
		});

	}



});
