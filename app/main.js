angular.module('uplodr', ['ngRoute', 'ui.bootstrap'])
  .config(($routeProvider) => (
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
      })
      .when('/twitter', {
        controller: 'TodoCtrl',
        templateUrl: 'todo/todo.html',
      })
      .when('/facebook', {
        controller: 'TodoCtrl',
        templateUrl: 'todo/todo.html',
      })
      .when('/todo', {
            templateUrl: 'todo/todo.html',
            controller: 'TodoCtrl'
        })
      .when('/notes', {
            templateUrl: 'notes/notes.html',
            controller: 'NotesCtrl'
        })
      .when('/upload', {
            templateUrl: 'upload/upload.html',
            controller: 'UploadCtrl'
        })
   
    )

  )

.controller('LogOutCtrl', function($scope, authFactory) {
    $scope.logOut = function() {
        firebase.auth().signOut();
    }
})

    

