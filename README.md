# sketch2json

[![https://travis-ci.org/xaviervia/sketch2json.svg?branch=master](https://travis-ci.org/xaviervia/sketch2json.svg?branch=master)](https://travis-ci.org/xaviervia/sketch2json/builds) [![npm version](https://img.shields.io/npm/v/sketch2json.svg?maxAge=1000)](https://www.npmjs.com/package/sketch2json)

Get a JSON output out of a buffer of Sketch v43+ data (works both in Node and in the browser)

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
## What is the structure of the contents of each file?

As far as I know, there is no official documentation yet. Meanwhile this [structure information](https://gist.github.com/xaviervia/edbea95d321feacaf0b5d8acd40614b2) from my explorations might be handy.

## Related

- [sketch-loader](https://github.com/xaviervia/sketch-loader)
 Webpack loader for Sketch v43+ files, uses this lib underneath the hood

## License

Unlicense
