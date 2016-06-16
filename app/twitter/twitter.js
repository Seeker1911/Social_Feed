angular.module('uplodr')

// .controller('TwitterCtrl', function ($scope, $http, twitterFactory) {
// 	twitterFactory.twitterAuth()
// })

.factory('twitterFactory', () => {
    // var twitterToken = null;
    // var userID = null;
    return {
        twitterAuth: function() {
            //var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
            // createWindow();
            var provider = new firebase.auth.TwitterAuthProvider();
            var userID = firebase.auth().currentUser.uid
            if (userID) {
                // statement
                console.log("userID: ", userID);
            } else {
                // statement
                return firebase.auth().signInWithPopup(provider)

            }

            //   	.then(function(result) {
            // 	  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // 	  // You can use these server side with your app's credentials to access the Twitter API.
            // 	  twitterToken = result.credential.accessToken;
            // 	  userID = result.user.uid;
            // 	  console.log("I am logged in!", result.user);
            // 	  var secret = result.credential.secret;
            // 	  // The signed-in user info.
            // 	  var user = result.user;
            // 	  // ...
            // 	}).catch(function(error) {
            // 		console.log("ARgh", error);
            // 	  // Handle Errors here.
            // 	  var errorCode = error.code;
            // 	  var errorMessage = error.message;
            // 	  // The email of the user's account used.
            // 	  var email = error.email;
            // 	  // The firebase.auth.AuthCredential type that was used.
            // 	  var credential = error.credential;
            // 	  // ...
            // 	});
        },
        // getUserID: function() {
        //           return userID;
        //       }
    }
})
