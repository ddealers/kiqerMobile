angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope){
})
.controller('RegisterCtrl', function($scope){
	$scope.external = function(url){
		window.open(url, '_system', 'location=no');
	}
})
.controller('SectionCtrl', function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
})
.controller('ProfileCtrl', function($scope){
	
})