'use strict';

angular.module('uplodr')
    .controller('TodoCtrl', function($scope, $timeout, facebookFactory, twitterFactory, $http, authFactory, $location) {
            const API_URL = 'https://capstone-cf12b.firebaseio.com'
            $scope.todos = [];
            // $scope.options = {};
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    let userID = user.uid
                    firebase.database().ref(userID).orderByChild('type').equalTo('todo').on('child_added', function(childData) {
                        $timeout(() => {
                            let todo = childData.val()
                            todo.key = childData.key
                            $scope.todos.push(todo)
                        });
                    })
                } else {
                    $location.path('/')
                }
            })

            $scope.addTodo = function(todo) {
                $scope.submit($scope.todo)
                    .then(() => $scope.todo = '');
            };


            $scope.submit = function(todo) {
                const userID = authFactory.getUserID()
                return $timeout(() => {
                    firebase.database().ref(userID).push({ text: todo, type: 'todo' });

                })
            }

            $scope.removeTodo = function(index) {
                const userID = authFactory.getUserID()
                const todoID = $scope.todos[index].key
                return $timeout()
                    .then(() => firebase.database().ref(userID + '/' + todoID).remove())
                    .then(() => $scope.todos.splice(index, 1))
            }
})
