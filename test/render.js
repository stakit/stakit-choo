var test = require('tape')
var utils = require('./utils')
var { render } = require('..')

test('render - arguments are validated', function (t) {
  t.plan(3)

  t.throws(render, 'throws without argument')
  t.throws(render.bind(null, 5), 'throws if not an object')
  t.throws(render.bind(null, { a: 1 }), 'throws if not a choo app')
})

test('render - returns a renderer function', function (t) {
  t.plan(4)

  var fn = render(utils.getApp())
  t.ok(typeof fn === 'function', 'is a function')

  var res = fn('/', {})
  t.ok(typeof res === 'object', 'renderer returns an object')
  t.ok(typeof res.html === 'string', 'res.html is a string')
  t.ok(typeof res.state === 'object', 'res.state is a object')
})

test('render - rendering works', function (t) {
  t.plan(2)

  var HTML_RESULT = `<body>
        /test
      </body>
  `

  var fn = render(utils.getApp())
  var { html, state } = fn('/test', {})

  t.ok(html.trim() === HTML_RESULT.trim(), 'html is correct')
  t.ok(typeof state.events === 'object', 'state was modified and returned')
})
