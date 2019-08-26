var choo = require('choo')
var html = require('choo/html')

var app = choo()

app.route('/', function (state, emit) {
  emit(state.events.DOMTITLECHANGE, 'Index Page')
  return html`
    <body>
      INDEX
    </body>
  `
})

app.route('/about', function (state, emit) {
  emit(state.events.DOMTITLECHANGE, 'About Page')
  return html`
    <body>
      ABOUT
    </body>
  `
})

module.exports = app.mount('body')
