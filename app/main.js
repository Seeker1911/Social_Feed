angular.module('uplodr', ['ngRoute'])
  .config(($routeProvider) => (
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
      })
      .when('/twitter', {
        controller: 'TwitterCtrl',
        controllerAs: 'twitter',
        templateUrl: 'todo/todo.html',
      })
      .when('/facebook', {
        controller: 'FacebookCtrl',
        controllerAs: 'facebook',
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
    //   $http({
    //     method: 'GET',
    //     url: 'https://capstone-cf12b.firebaseio.com/'
    // }).then(function successCallback(response) {
    //     console.log("status: ", status);
    //     console.log("data: ", data);
    //     // this callback will be called asynchronously
    //     // when the response is available
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });

    )

  )

    

