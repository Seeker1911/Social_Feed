angular.module('uplodr')

.controller('FacebookCtrl', function($scope, $http, facebookFactory) {
    facebookFactory.facebookAuth()
})

.factory('facebookFactory', () => {
    var facebookToken = null;
    var userID = null;
    return {
        facebookAuth: function() {
            //var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
            // createWindow();
            var provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                facebookToken = result.credential.accessToken;
                console.log("I am logged in!", result.user);
                console.log("Get user ID", result.user.uid);
                userID = result.user.uid;
                var secret = result.credential.secret;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch(function(error) {
                console.log("ARgh", error);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        },
        getUserID: function() {
            return userID;
        }
    }
})
