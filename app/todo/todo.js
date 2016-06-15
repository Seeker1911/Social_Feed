'use strict';

angular.module('uplodr')
  .controller('TodoCtrl', function ($scope, $timeout) {
    $scope.todos = [ ];
    $scope.options = {};

    $scope.addTodo = function (){
      $scope.todos.push($scope.todo);
      $scope.submit($scope.todo)
        .then(() => $scope.todo = '');
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    $scope.submit = function (todo) {
      return $timeout(() => {
        firebase.database().ref('/ToDo').push(todo);
      })
    }

    // Firebase listeners for child data updates
    firebase.database().ref('/ToDo').on('child_added', function(childData) {
      $timeout(() => {
        $scope.options[childData.key] = childData.val();
      });
    })

    firebase.database().ref('/ToDo').on('child_changed', function(childData) {
      $timeout(() => {
        $scope.options[childData.key] = childData.val();
      });
    })

  });
