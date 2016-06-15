// Firebase Storage Rules:
//
// service firebase.storage {
//   match /b/angular-file-upload-ae72b.appspot.com/o {
//     match /{allPaths=**} {
//       allow read, write;
//     }
//   }
// }

angular.module('uplodr')
  .controller('UploadCtrl', function ($timeout, uploadFactory, facebookFactory) {
    const up = this

    up.heading = 'Upload Files'
    up.photoURLs = []

    up.submit = function () {
      const input = document.querySelector('[type="file"]')
      const file = input.files[0]

      const randomInteger = Math.random() * 1e17
      const getFileExtension = file.type.split('/').slice(-1)[0]
      const randomPath = `${randomInteger}.${getFileExtension}`

      uploadFactory.send(file, randomPath)
        .then(res => {
          up.photoURLs.push(res.downloadURL)
          return res.downloadURL
        })
        .then((url) => {        
          const userID = facebookFactory.getUserID()
          console.log("user id: ", userID);
          firebase.database().ref('/files').push({url: url, uid: userID})
        })
    }
  })
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
