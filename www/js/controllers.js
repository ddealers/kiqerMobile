angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, User, $stateParams, $state){
	/*var user = User.show(1, function(){
		console.log(user);
	});*/
	$scope.user = {};
	$scope.login = function(){
		User.login({email:$scope.user.email, password:$scope.user.password}).then(function(s){
			if(s){
				$state.go('section.tab.timeline');
			}
		}, function(e){});
	}


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