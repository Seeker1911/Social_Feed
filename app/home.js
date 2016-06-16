angular.module('uplodr')

.controller('HomeCtrl', function($scope, $http, facebookFactory, twitterFactory) {
    $scope.facebookLogin = function() {
    facebookFactory.facebookAuth()
    }

    $scope.twitterLogin = function() {
    twitterFactory.twitterAuth()
    }

})
