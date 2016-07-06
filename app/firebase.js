
angular.module('uplodr')
  .config(() => {
var config = {
    apiKey: "AIzaSyA7hEngB7GaeBIxBLKrOhomK6UfQ66rulA",
    authDomain: "capstone-cf12b.firebaseapp.com",
    databaseURL: "https://capstone-cf12b.firebaseio.com",
    storageBucket: "capstone-cf12b.appspot.com",
  };
  firebase.initializeApp(config);

})



  .factory('authFactory', ($location, $timeout) => {
    let userID = null;
    firebase.auth().onAuthStateChanged(function(user) {
    	if (user) {
        userID = user.uid
    		  // User is signed in.
        $location.path('/todo');
    		$timeout()
    	  
    	} else {
    	    // No user is signed in.
    	  console.log("No user signed in");
        $location.path('/');
        $timeout()
    	}
    });
  	return {
  		getUserID () {
  			return userID
        // firebase.auth().currentUser.uid

  		}
  	}
  })

