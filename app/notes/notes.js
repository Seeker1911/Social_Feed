'use strict';

angular.module('uplodr')
  .controller('NotesCtrl', function ($scope, $timeout, facebookFactory, twitterFactory, $http, authFactory) {
  $scope.notes = [ ];
  //DEFAULT BEHAVIOR ONLY ALLOWS USER TO OPEN ONE NOTE AT A TIME, CHECKBOX OPTION TO CHANGE
  $scope.oneAtATime = true;
  // $scope.status = {
  //   isCustomHeaderOpen: false,
  //   isFirstOpen: true,
  //   isFirstDisabled: false
  // }
//IF USER IS SIGNED IN, LISTENS FOR ADDITIONS TO DATABASDE AND ADDS TO ARRAY
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      let userID = user.uid 
      firebase.storage().ref(userID).orderByChild('type').equalTo('Note').on('child_added' , function(childData, note){
        $timeout(() => {
          let note = childData.val() 
          note.key = childData.key
          $scope.notes.push(note)
        })
      })
    } else {
      $location.path('/')
    }
  })

//PROMISE CHAIN TO PUSH TO FIREBASE AND THEN MAKE TEXT AREA BLANK
  $scope.addNote = function(note) {
      const userID = authFactory.getUserID();
      return $timeout()
        .then(() => firebase.storage().ref(userID).push({text: $scope.newNote, type: 'Note'}))
        .then(() => $scope.newNote = '')
  }

   $scope.removeNote = function(index) {
                const userID = authFactory.getUserID()
                const notesID = $scope.notes[index].key
                return $timeout()
                    .then(() => firebase.storage().ref(userID + '/' + notesID).remove())
                    .then(() => $scope.notes.splice(index, 1))
            }

})
