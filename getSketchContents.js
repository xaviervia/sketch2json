const Task = require('folktale/data/task')
const {List} = require('immutable-ext')
const getZipContents = require('./getZipContents')
const getFileFromZip = require('./getFileFromZip')

const listOfJSONFiles = zip => List(
  Object.keys(zip.files)
    .filter(path => path.slice(-5) === '.json')
)

module.exports = fileData =>
  getZipContents(fileData)
    .chain(zip =>
      listOfJSONFiles(zip)
        .traverse(Task.of, path => getFileFromZip(zip, path))
    )
    .map(parsedPairsList =>
      parsedPairsList
        .reduce((result, pair) => {
            if (pair[0] === 'document.json') {
              result.document = pair[1]
            } else if (pair[0] === 'user.json') {
              result.user = pair[1]
            } else if (pair[0] === 'meta.json') {
              result.meta = pair[1]
            } else {
              result.pages[pair[0].split('/')[1].slice(0, -5)] = pair[1]
            }

            return result
          }, {pages: {}}
        )
    )
