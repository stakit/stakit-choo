var hstream = require('hstream')
var jsesc = require('jsesc')
var assert = require('assert')

module.exports = {
  render,
  hydrate
}

function render (app) {
  assert(typeof app.state === 'object', 'stakit-choo: app must be a mounted choo app')
  return function (route, extendState) {
    var state = Object.assign(app.state, extendState)
    var html = app.toString(route, state)

    return {
      html: html,
      state: state
    }
  }
}

function hydrate (context) {
  return function () {
    return hstream({
      head: {
        _appendHtml: `<script>window.initialState = JSON.parse(${stringify(context.state)})</script>`
      }
    })
  }
}

// stringify data as safely escaped JSON
function stringify (data) {
  return jsesc(JSON.stringify(data), {
    json: true,
    isScriptContext: true
  })
}
