  // <form ng-submit="addFile()">
  //       <input type="file" ng-model="newFile">
  //       <input class='btn btn-primary' type="submit" value="upload">
  //   </form>
angular.module('uplodr')
  .factory('uploadFactory', ($timeout) => ({
    send (file, path = file.name) {
      return $timeout().then(() => (
        new Promise ((resolve, reject) => {
          const uploadTask = firebase.storage().ref()
            .child(path).put(file)
          uploadTask.on('state_changed',
            null,
            reject,
            () => resolve(uploadTask.snapshot)
          )
        })
      ))
    }
  }))
  .controller('UploadCtrl', function ($scope, $timeout, authFactory, uploadFactory) {
      const API_URL = 'https://capstone-cf12b.appspot.com'
      $scope.files = [];
          const userID = authFactory.getUserID()
          const storageRef = firebase.storage().ref(userID)
          $scope.addFile = function(newFile) {
            const input = document.querySelector('[type="file"]')
            const file = input.files[0]
         
            console.log("scope files", $scope.files)
            console.log("file: ", file)

        firebase.database().ref(userID).orderByChild('type').equalTo('file').on('child_added', function(childData) {
                $timeout(() => {
                    let file = childData.val()
                    file.key = childData.key
                    // $scope.files.push(file)
                });
            })

            uploadFactory.send(file) 
              .then(res => {
                $scope.files.push(res.a.name)
            console.log("res", res.a.name);

                return res.downloadURL
              })
              .then((url) => {
                firebase.database().ref(userID).push({url, type: 'file'})
              })
              console.log('files', $scope.files);
          }


          $timeout()
            .then(() => firebase.database().ref(userID).once('value'))
            .then(snap => snap.val())
            .then(data => $scope.file = data)

      })

