angular.module('uplodr')


.factory('facebookFactory', ($location) => {
    return {
        facebookAuth: function() {
            var provider = new firebase.auth.FacebookAuthProvider();
            // var userID = firebase.auth().currentUser.uid
            if (firebase.auth().currentUser) {
                $location.path('/todo');
                // statement
            } else {
                // statement
            return firebase.auth().signInWithPopup(provider)
            }

        },
       
    }
})
