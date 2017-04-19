const getImageFromZip = require('../getImageFromZip')
const getZipContents = require('../getZipContents')
const fs = require('fs')

const imagePngBase64 = fs.readFileSync(
  __dirname + '/fixtures/images/image.png.base64'
).toString().trim()

const imageJpgBase64 = fs.readFileSync(
  __dirname + '/fixtures/images/image.jpg.base64'
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
  },
  {
    description: 'gives a pair with the path and the base64 JPG',
    test: check => {
      fs.readFile(__dirname + '/fixtures/images.zip', (error, data) => {
        getZipContents(data)
          .chain(zip => getImageFromZip(zip, 'image.jpg'))
          .map(pair => {
            check(pair)
          })
          .run()
      })
    },
    shouldEqual: [
      'image.jpg',
      `data:image/jpeg;base64,${imageJpgBase64}`
    ]
  },
  {
    description: 'gives a pair with the path and the base64 JPG (.jpeg)',
    test: check => {
      fs.readFile(__dirname + '/fixtures/images.zip', (error, data) => {
        getZipContents(data)
          .chain(zip => getImageFromZip(zip, 'image.jpeg'))
          .map(pair => {
            check(pair)
          })
          .run()
      })
    },
    shouldEqual: [
      'image.jpeg',
      `data:image/jpeg;base64,${imageJpgBase64}`
    ]
  }
]
