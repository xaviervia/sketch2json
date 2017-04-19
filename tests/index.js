const getZipContentsTests = require('./getZipContentsTests')
const getImageFromZipTests = require('./getImageFromZipTests')
const getJSONFromZipTests = require('./getJSONFromZipTests')
const getSketchContentsTests = require('./getSketchContentsTests')
const sketch2jsonTests = require('./sketch2jsonTests')

const withNamespace = namespace => ({description, test, shouldEqual}) => ({
  description: `${namespace}: ${description}`,
  test,
  shouldEqual
})

module.exports = []
  .concat(getZipContentsTests.map(withNamespace('getZipContents')))
  .concat(getImageFromZipTests.map(withNamespace('getImageFromZip')))
  .concat(getJSONFromZipTests.map(withNamespace('getJSONFromZip')))
  .concat(getSketchContentsTests.map(withNamespace('getSketchContents')))
  .concat(sketch2jsonTests.map(withNamespace('sketch2json')))
