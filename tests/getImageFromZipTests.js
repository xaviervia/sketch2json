const getImageFromZip = require('../getImageFromZip')
const getZipContents = require('../getZipContents')
const fs = require('fs')

const imagePngBase64 = fs.readFileSync(
  __dirname + '/fixtures/images/image.png.base64'
).toString().trim()

module.exports = [
  {
    description: 'gives a pair with the path and the base64 PNG',
    test: check => {
      fs.readFile(__dirname + '/fixtures/images.zip', (error, data) => {
        getZipContents(data)
          .chain(zip => getImageFromZip(zip, 'image.png'))
          .map(pair => {
            check(pair)
          })
          .run()
      })
    },
    shouldEqual: [
      'image.png',
      `data:image/png;base64,${imagePngBase64}`
    ]
  }
]
