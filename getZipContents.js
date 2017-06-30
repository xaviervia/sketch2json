const JSZip = require('jszip')
const {task} = require('folktale/concurrency/task')

module.exports = (zippedFolder) =>
  task(({resolve, reject}) =>
    JSZip
      .loadAsync(zippedFolder)
      .then(function (zip) {
        resolve(zip)
      })
      .catch(function (error) {
        reject(error)
      })
  )
