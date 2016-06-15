'use strict';

angular.module('uplodr')
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = [ ];

    $scope.addTodo = function (){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
