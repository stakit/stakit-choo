var choo = require('choo')
var html = require('choo/html')

module.exports = {
  getApp
}

function getApp () {
  var app = choo()

  app.route('*', function (state, emit) {
    return html`
      <body>
        ${state.href || '/'}
      </body>
    `
  })

  return app.mount('body')
}
