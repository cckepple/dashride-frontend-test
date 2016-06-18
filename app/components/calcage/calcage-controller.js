angular.module('myApp')
.controller('CalcAgeCtrl', function ($scope, $http, numbersApi, calcAge) {
  	$scope.openCalendar = function() {
	  $scope.dateSettings.opened = true;
	};

	$scope.calculateAge = function() {
		$scope.ageInfo = calcAge.getAge($scope.birthDay);
		$scope.getFact();
	};

	$scope.getFact = function() {
		numbersApi.getFact(numbersApi.makeUrl($scope.birthDay))
			.then(function(data){
				$scope.ageInfo.fact = data;
			}, function(data){
				console.log(data)
		});
	};

	$scope.dateSettings = {
		format: 'MMMM, dd yyyy',
		options:{
			    formatYear: 'yyyy',
			    maxDate: new Date(),
			    datepickerMode:'year'
  				},
  		opened: false	
	}
  	$scope.ageInfo = {};

	
});