var tape = require('tape')
var tapePromise = require('tape-promise').default
var stakit = require('stakit')
var utils = require('./utils')
var testWriter = require('stakit-test-writer')
var { hydrate, render } = require('..')

var test = tapePromise(tape)

var STATE = { content: 'hello world' }

test('hydrate - transform works', async function (t) {
  t.plan(1)

  var kit = stakit()
    .use(stakit.state(STATE))
    .routes(() => ['/'])
    .render(render(utils.getApp()))
    .transform(hydrate)

  var writer = testWriter()

  await kit.output(writer)

  t.ok(writer.get('/index.html').includes('window.initialState'), 'state was included')
})
