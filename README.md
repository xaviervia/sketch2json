# sketch2json

[![https://travis-ci.org/xaviervia/sketch2json.svg?branch=master](https://travis-ci.org/xaviervia/sketch2json.svg?branch=master)](https://travis-ci.org/xaviervia/sketch2json/builds) [![npm version](https://img.shields.io/npm/v/sketch2json.svg?maxAge=1000)](https://www.npmjs.com/package/sketch2json)

Get a JSON output out of a buffer of Sketch v43+ data (works both in Node and in the browser)

Combined with the stylish [React JSON Tree](https://github.com/alexkuz/react-json-tree), you can inspect the Sketch file contents easily:

[![https://xaviervia.github.io/sketch2json](demo.gif)](https://xaviervia.github.io/sketch2json)
> Check out the live demo in [https://xaviervia.github.io/sketch2json](https://xaviervia.github.io/sketch2json)

## Installation

```
npm install --save sketch2json
```

## Usage

In Node, you can read a Sketch file from the file system and pass it to `sketch2json` to get the JSON representation of it's internal data. You can use the file in `tests/fixtures/simple.sketch` as an example

```javascript
const fs = require('fs')
const sketch2json = require('sketch2json')

fs.readFile(__dirname + '/simple.sketch', (error, data) => {
  sketch2json(data).then(result => console.log(result))
})
```

The result will be an object structure like:

```javascript
{
  document: {}, // parsed contents of document.json
  user: {}, // parsed contents of user.json
  meta: {}, // parsed contents of meta.json
  pages: {
    '0F364A54-A488-4D6F-BAA4-F93FB057C5A3': {}, // parsed contents of pages/0F364A54-A488-4D6F-BAA4-F93FB057C5A3.json, and so on for every page file
    ...
  }
}
```

### In the browser

In the browser, it depends on how you read the file. If you get it from a [`FileReader`](https://developer.mozilla.org/en/docs/Web/API/FileReader) you will need to make sure to read it as an `ArrayBuffer`. The [implementation in the demo](demo/src/app.js) is a little complex but might be of help.

## What is the structure of the contents of each file?

As far as I know, there is no official documentation yet.

Meanwhile here you can find [Flowtype definitions for Sketch 43+ JSON](https://github.com/darknoon/sketchapp-json-flow-types/blob/master/types.js) by @darknoon to use as guide.

## Related

- [sketch-loader](https://github.com/xaviervia/sketch-loader)
 Webpack loader for Sketch v43+ files, uses this lib underneath the hood

## License

Unlicense
