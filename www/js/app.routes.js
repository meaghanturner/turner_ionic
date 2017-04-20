// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//var ThesisApp = angular.module('ThesisApp', ['ionic', 'ngRoute', 'ngSanitize'])

ThesisApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/',{
    controller: 'SignupController',
    templateUrl: 'templates/shared/welcome.html'
  })
  .when('/signup',{
    controller: 'SignupController',
    templateUrl: 'templates/users/signup.html'
  })
  .when('/login',{
    controller: 'LoginController',
    templateUrl: 'templates/users/login.html'
  })
  .when('/events',{
    controller: 'ListController',
    templateUrl: 'templates/events/eventAll.html'
  })
  .when('/details/:id',{
    controller: 'DetailsController',
    templateUrl: 'templates/events/eventView.html'
  })
  .when('/events/form',{
    controller: 'FormController',
    templateUrl: 'templates/events/eventForm.html'

  })
  .when('/events/edit/:id',{
    controller: 'UpdateController',
    templateUrl: 'templates/events/eventUpdate.html'
  })
  .when('/events/update/:id',{
    controller: 'UpdateController',
    templateUrl: 'templates/events/eventUpdate.html'
  })
  .when('/badges',{
    controller: 'ListController',
    templateUrl: 'templates/shared/badges.html'
  })
  .when('/favs',{
    controller: 'ListController',
    templateUrl: 'templates/shared/favs.html'
  })

  .otherwise({redirectTo: '/events'});
}]);
