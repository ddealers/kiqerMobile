angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, User, $stateParams, $state, userId){
	$scope.user = {};
	$scope.login = function(){
		User.login({email:$scope.user.email, password:$scope.user.password}).then(function(s){
			if(s){
				$state.go('section.tab.timeline');
				userId.value = s;
			}else{
				console.log('error: ' + s);
			}
		}, function(e){});
	}
})
.controller('RegisterCtrl', function($scope, User, $stateParams, $state, userId){
	$scope.user = {};
	$scope.create = function(){
		User.create(user = {name: $scope.user.name, password:$scope.user.password, email:$scope.user.email}).then(function(s){
			if(s){
				userId.value = s.id;
				$state.go('type');
				console.log(userId);
			}else{
				console.log('error: ' + s);
			}
		}, function(e){console.log(e);});
	}
})

.controller('TypeCtrl', function($scope, User, $stateParams, $state, userId){
	$scope.updateUser = function(u){
		User.update(userId.value,{tipo:u}).then(function(s){
			if(s){
				$state.go('section.edit_profile');
			}else{
				console.log('error: ' + s);
			}
		}, function(e){});
	}
})

.controller('EditProfileCtrl', function($scope, Profile, $stateParams, $state, userId){
	$scope.profile = {};
	$scope.create = function(){
		Profile.create(userId.value, {name: $scope.profile.name, surname: $scope.profile.surname, birth: $scope.profile.birth, country: $scope.profile.country}).then(function(s){
			console.log(s);
			if(s){
				$state.go('section.tab.timeline');
			}else{
				console.log('error: ' + s);
			}
		}, function(e){console.log(e);});
	}
})

.controller('ProfileCtrl', function($scope, Profile, $stateParams, $state, userId){
	$scope.profile = {};
	
	$scope.show = function(){
		Profile.show(userId.value).then(function(s){
			console.log(s);
			$scope.profile = s;
		})
	}


	$scope.follow = function(idf){
		Kiqs.follow({follow: userId.value, follower: idf}).then(function(s){
			console.log(s);
			if(s){
				console.log('true: '+s);
			}else{
				console.log('error: ' + s);
			}
		}, function(e){console.log(e);});
	}

	$scope.show();
})

.controller('SectionCtrl', function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
})
