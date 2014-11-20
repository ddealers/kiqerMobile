angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $famous){
	var Transitionable = $famous['famous/transitions/Transitionable'];
	var Easing = $famous['famous/transitions/Easing'];

	$scope.layoutModifier = [undefined, window.innerHeight];
	$scope.layoutOptions = {
		direction: 1,
		ratios: [1,2,1,4,1,1,1,1,3]
	}
	$scope.transition = new Transitionable(0);
	$scope.transition.set(1, {duration: 500, curve: 'easeOut'});
})

.controller('DashCtrl', function($scope, $famous, $timeline) {
	var Transitionable = $famous['famous/transitions/Transitionable'];
	var Easing = $famous['famous/transitions/Easing'];

	$scope.translation = new Transitionable([0,0,0]);
	$scope.translation.set([100,100,0], {duration: 1000, curve: Easing.inOutBack});
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
