
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

