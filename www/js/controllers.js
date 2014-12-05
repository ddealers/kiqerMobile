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

.controller('TimelineCtrl', function($scope, Posts, User, $stateParams, $state, userId){
	$scope.user = {};
	$scope.show = function(){
		User.gpost(userId.value).then(function(s){
			console.log(s);
			$scope.user = s;
		}, function(e){console.log(e);});
	}
	$scope.show();
})

//Update Profile
.controller('ProfileCtrl', function($scope, Profile, Kiqs, $stateParams, $state, userId){
	$scope.profile = {};
	
	$scope.show = function(){
		Profile.show(userId.value).then(function(s){
			console.log(s);
			$scope.profile = s;
		})
	}

	$scope.show();

	$scope.update = function(){
		Profile.update(userId.value, {name: $scope.profile.name, surname: $scope.profile.surname, birth: $scope.profile.birth, country: $scope.profile.country}).then(function(s){
			console.log(s);
			if(s){
				$state.go('section.tab.timeline');
			}else{
				console.log('error: ' + s);
			}
		}, function(e){console.log(e);});
	}

	$scope.kiqs = {}; 
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
})

//Publicar Post
.controller('PostCtrl', function($scope, Posts, User, $stateParams, $state, $ionicModal, userId){
	$scope.post = {};

	$ionicModal.fromTemplateUrl('post.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
		$scope.modal.show();
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	$scope.$on('modal.hidden', function() {
	});
	$scope.$on('modal.removed', function() {
	});

	$scope.newpost = function(){
		User.cpost(userId.value, post = {title: $scope.post.title, text: $scope.post.text, picture: $scope.post.picture, location: $scope.post.location}).then(function(s){
			if(s){
				console.log('true: '+ s);
			}else{
				console.log('fals: '+ s);
			}
		}, function(e){console.log(e);});
	}
})
/*
.controller('KiqCtrl', function($scope, Kiqs, $stateParams, $state, userId){
	$scope.kiq = {};

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
})
*/

.controller('SectionCtrl', function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
})
