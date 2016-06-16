'use strict';

angular.module('uplodr')
  .controller('TodoCtrl', function ($scope, $timeout, facebookFactory, twitterFactory, $http) {
    const API_URL = 'https://capstone-cf12b.firebaseio.com'
    $scope.todos = [ ];
    $scope.options = {};

    $scope.addTodo = function (){
      // $scope.todos.push($scope.todo);
      $scope.submit($scope.todo)
        .then(() => $scope.todo = '');
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    $scope.submit = function (todo) {
      return $timeout(() => {
        const userID = firebase.auth().getUserID();//facebookFactory.getUserID() || twitterFactory.getUserID()

        firebase.database().ref('/ToDo').push({uid: userID, todo: todo});
      })
    }

      
    //  $http.get(`${API_URL}/ToDo.json`) 
    //   .then((res) => {
    //   if (res) {
    //     console.log("data: ", res);
    //     for (let id in res.data) {
    //       res.data[id].key=id;
    //       $scope.todos.push(res.data[id])
    //        // addItemToTable(data[id])
    //     }
    //     console.log("$scope.todos: ", $scope.todos);
    //   }
    // })

    // Firebase listeners for child data updates
    firebase.database().ref('/ToDo').on('child_added', function(childData) {
      $timeout(() => {
        let todo = childData.val()
        todo.key = childData.key
        $scope.todos.push(todo)
        // console.log("todo: ", $scope.todos);
      });
    })

    firebase.database().ref('/ToDo').on('child_changed', function(childData) {
      $timeout(() => {
        // $scope.options[childData.key] = childData.val();
      });
    })

  });
