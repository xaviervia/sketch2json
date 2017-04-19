const Task = require('folktale/data/task')
const {List} = require('immutable-ext')
const getZipContents = require('./getZipContents')
const getJSONFromZip = require('./getJSONFromZip')
const getImageFromZip = require('./getImageFromZip')

const listOfJSONFiles = zip => List(
  Object.keys(zip.files)
    .filter(path => path.slice(-5) === '.json')
)

const listOfImageFiles = zip => List(
  Object.keys(zip.files)
    .filter(path =>
      // Very likely missing some format, couldn't find
      // a comprehensive list of supported ones
      path.slice(-4) === '.png' ||
      path.slice(-4) === '.jpg' ||
      path.slice(-4) === '.jpeg' ||
      path.slice(-4) === '.gif'
    )
)

module.exports = fileData =>
  getZipContents(fileData)
    .chain(zip =>
      listOfJSONFiles(zip)
        .map(path => [path, 'json'])
        .concat(
          listOfImageFiles(zip)
            .map(path => [path, 'image'])
        )
        .traverse(Task.of, ([path, type]) =>
          type === 'json'
            ? getJSONFromZip(zip, path)
            : getImageFromZip(zip, path)
        )
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
          } else if (pair[0] === 'previews/preview.png') {
            result.preview = pair[1]
          } else {
            result.pages[pair[0].split('/')[1].slice(0, -5)] = pair[1]
          }

          return result
        }, {pages: {}})
    )
