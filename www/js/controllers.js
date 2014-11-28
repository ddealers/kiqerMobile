angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, User, $stateParams, $state){
	/*var user = User.show(1, function(){
		console.log(user);
	});*/
	$scope.user = {};
	$scope.login = function(){
		User.login({email:$scope.user.email, password:$scope.user.password}).then(function(s){
			console.log(s);
			if(s == 'true'){
				$state.go('section.tab.timeline');
			}else{
				console.log('error: ' + s);
			}
		}, function(e){});
	}
})
.controller('RegisterCtrl', function($scope, User, $stateParams, $state){
	/*$scope.external = function(url){
		window.open(url, '_system', 'location=no');
	}*/
	$scope.user = {};
	$scope.create = function(){
		User.create(user = {name: $scope.user.name, password:$scope.user.password, email:$scope.user.email}).then(function(s){
			console.log(s);
			if(s){
				$state.go('type');
			}else{
				console.log('error: ' + s);
			}
		}, function(e){console.log(e);});
	}
})


.controller('SectionCtrl', function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
})
.controller('ProfileCtrl', function($scope){
	
})