angular.module('uplodr')
  .controller('UploadCtrl', function ($scope, $timeout, authFactory) {
    const storageRef = firebase.storage().ref()
    console.log("storage ref", storageRef)
    
  })
  
  // <form ng-submit="addFile()">
  //       <input type="file" ng-model="newFile">
  //       <input class='btn btn-primary' type="submit" value="upload">
  //   </form>
