var stakit = require('stakit')
var { render, hydrate } = require('..')

var app = require('./app')

stakit()
  .routes(() => ['/', '/about'])
  .render(render(app))
  .transform(hydrate)
  .output()
