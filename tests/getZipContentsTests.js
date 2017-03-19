const getZipContents = require('../getZipContents')
const fs = require('fs')

module.exports = [
  {
    description: 'the task has a zip object with the file path',
    test: check => {
      fs.readFile(__dirname + '/fixtures/simple.zip', (error, data) => {
        getZipContents(data)
          .map(zip => {
            check(Object.keys(zip.files))
          })
          .run()
      })
    },
    shouldEqual: [
      'main.js',
      'src/',
      'src/index.js'
    ]
  }
]
