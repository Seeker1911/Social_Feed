
angular.module('uplodr')
  .config(() => {
var config = {
    apiKey: "AIzaSyA7hEngB7GaeBIxBLKrOhomK6UfQ66rulA",
    authDomain: "capstone-cf12b.firebaseapp.com",
    databaseURL: "https://capstone-cf12b.firebaseio.com",
    storageBucket: "capstone-cf12b.appspot.com",
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		  // User is signed in.
	  console.log("User logged in: ", user.uid);
		return {
			getUserID: function() {
            return userID;
        }
		}
	  
	} else {
	    // No user is signed in.
	  console.log("No user signed in");
	}
  });
})

  .factory('authFactory', () => {
  	return {
  		getCurrentUser () {
  			return firebase.auth().currentUser
  		}
  	}
  })

