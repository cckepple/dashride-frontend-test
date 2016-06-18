angular.module('myApp')
.factory('numbersApi', function($http, $q) {
	var service = {};
	var funFact = '';

	service.getFact = function(url) {
		var deferred = $q.defer();
		$http.get(url)
		.success(function(data){
			deferred.resolve(data);
		}).error(function(data){	
			deferred.reject('error with numbersApi');
		});
		return deferred.promise;
	};

	service.makeUrl = function(birthday) {
		var dob = birthday.getDate();
		var birthMonth = birthday.getMonth()+1;
		return 'http://numbersapi.com/'+birthMonth+'/'+dob+'/date';
	}

	return service;
})
.factory('calcAge', function() {
	var service = {};

	service.getAge = function(birthday) {
		var ageInfo = {};
		var diffMilli = Date.now() - birthday.getTime();
		var ageDate =  new Date(diffMilli); 
		var age = Math.abs(ageDate.getUTCFullYear() - 1970);
		var ageText = 'You are '+age+' year';
		if (age > 1) {
			ageText += 's old.'
		}else{
			ageText += ' old.'
		}
		ageInfo.displayAge = true;
		ageInfo.ageText = ageText;
		return ageInfo;
	};
	return service

});