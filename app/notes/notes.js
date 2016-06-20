'use strict';

angular.module('uplodr')
  .controller('NotesCtrl', function ($scope, $timeout, facebookFactory, twitterFactory, $http, authFactory) {

  	$scope.addNote = () => {
	    $scope.groups.push({ title: $scope.newNote.slice(0, 50), content: $scope.newNote});
	        return $timeout(() => {
	        const userID = authFactory.getUserID(); //facebookFactory.getUserID() || twitterFactory.getUserID()

	        firebase.database().ref(userID).push({newNote: newNote.innerHTML})
	    	.then(() => $scope.newNote = '');
	    })
  }

  // })

  // .controller('AccordionCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  }


})
