const getSketchContents = require('./getSketchContents')

module.exports = (buffer, options = {}) => {
  if (options.task) {
    return getSketchContents(buffer)
  } else {
    return new Promise(resolve =>
      getSketchContents(buffer)
        .map(result => resolve(result))
        .run()
    )
  }
}
