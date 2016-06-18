angular.module('myApp')
.controller('CalcAgeCtrl', function ($scope, $http, numbersApi, calcAge) {
  	$scope.openCalendar = function() {
	  $scope.datePick.opened = true;
	};

	//craete service for this
	$scope.calculateAge = function() {
		$scope.ageInfo = calcAge.getAge($scope.birthDay);
		$scope.getFact();
	}

	$scope.getFact = function() {
		numbersApi.getFact(numbersApi.makeUrl($scope.birthDay))
			.then(function(data){
				$scope.ageInfo.fact = data;
			}, function(data){
				console.log(data)
		});
	}

  	$scope.format = 'MMMM, dd yyyy';
  	$scope.dateOptions = {
	    formatYear: 'yyyy',
	    maxDate: new Date(),
	    datepickerMode:'year'
  	};
  	$scope.datePick = {'opened':false};
  	$scope.ageInfo = {};

	
});