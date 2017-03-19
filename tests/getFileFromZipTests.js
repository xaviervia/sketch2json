const getFileFromZip = require('../getFileFromZip')
const getZipContents = require('../getZipContents')
const fs = require('fs')

module.exports = [
  {
    description: 'gives a pair with the path and the parsed content',
    test: check => {
      fs.readFile(__dirname + '/fixtures/content.zip', (error, data) => {
        getZipContents(data)
          .chain(zip => getFileFromZip(zip, 'content.json'))
          .map(pair => {
            check(pair)
          })
          .run()
      })
    },
    shouldEqual: [
      'content.json',
      {
        hello: 'world'
      }
    ]
  }
]
