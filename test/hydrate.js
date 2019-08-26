var tape = require('tape')
var tapePromise = require('tape-promise').default
var stakit = require('stakit')
var utils = require('./utils')
var { hydrate, render } = require('..')

var test = tapePromise(tape)

var STATE = { content: 'hello world' }

test('hydrate - transform works', async function (t) {
  t.plan(1)

  var kit = stakit()
    .state(STATE)
    .routes(() => ['/'])
    .render(render(utils.getApp()))
    .transform(hydrate)

  var pages = {}

  await kit.output(testWriter(pages))

  t.ok(pages['/'].includes('window.initialState'), 'state was included')
})

function testWriter (pages) {
  return { write }

  function write (route, html) {
    pages[route] = html
  }
}
