angular.module('myApp')
.directive('displayFact', function(){
	return {
		restrict: 'E',
		replace: true,
		template:
			'<div ng-show="ageInfo.displayAge">'+
	    		'<h4>{{ageInfo.ageText}}</h4>'+
	    		'<div class="panel panel-default">'+
			    	'<div class="panel-heading">Fun Fact!</div>'+
				    '<div class="panel-body">{{ageInfo.fact}}</div>'+
				'</div>'+
				'<a class="ng-link btn btn-default" ng-click="getFact()">New Fact!</a>'+
	    	'</div>',
	}
});