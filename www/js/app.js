// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var kiqer = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMaterial'])
//var kiqer = angular.module('kiqer', []);
.value('userId', {value: 0})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('registro', {
      url: '/registro',
      templateUrl: 'templates/registro.html',
      controller: 'RegisterCtrl'
    })

    .state('type', {
      url: '/type',
      templateUrl: 'templates/type.html',
      controller: 'TypeCtrl'
    })

    .state('section', {
      url: "/section",
      abstract: true,
      templateUrl: 'templates/sections.html',
      controller: 'SectionCtrl'
    })

    .state('section.edit_profile', {
      url: '/edit_profile',
      views: {
        'content': {
          templateUrl: 'templates/edit_profile.html',
          controller: 'EditProfileCtrl'
        }
      }
    })

    .state('section.profile', {
      url: '/profile',
      views: {
        'content': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // setup an abstract state for the tabs directive
    .state('section.tab', {
      url: "/tab",
      views: {
        'content': {
          abstract: true,
          templateUrl: 'templates/tabs.html'
        }
      }
    })

    .state('section.tab.timeline', {
      url: '/timeline',
      views: {
        'timeline': {
          templateUrl: 'templates/timeline.html',
          controller: 'TimelineCtrl'
        }
      }
    })
    //fherrera@digitaldealers.mx

    .state('section.tab.post', {
      url: '/post',
      views: {
        'timeline': {
          templateUrl: 'templates/post.html',
          controller: 'PostCtrl'
        }
      }
    })

    .state('section.tab.single', {
      url: '/single',
      views: {
        'timeline': {
          templateUrl: 'templates/timeline_single.html',
          controller: 'TimelineCtrl'
        }
      }
    });
    
    /*
    .state('section.tab.single.', {
      url: '/single',
      views: {
        'timeline': {
          templateUrl: 'templates/timeline_single.html',
          controller: 'TimelineCtrl'
        }
      }
    });
    */

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});