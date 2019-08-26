# stakit-choo
Stakit utilities for Choo.

<a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
  <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="Stability"/>
</a>
<a href="https://www.npmjs.com/package/stakit-choo">
  <img src="https://img.shields.io/npm/v/stakit-choo.svg?style=flat-square" alt="NPM version"/>
</a>

## Installation
```
npm i stakit-choo
```

## Example
```javascript
var stakit = require('stakit')
var { render, hydrate } = require('stakit-choo')

var app = require('./app')

stakit()
  .routes(function () {
    return ['/', '/about']
  })
  .render(render(app))
  .transform(hydrate)
  .output()
```

## Usage
Currently provides a renderer and a transform.

### `stakitChoo.render(app)`
Renders the page using `app.toString`.

### `stakitChoo.hydrate`
A simple transform that appends a script that sets `window.initialState` to the state of the page, aka. rehydration.
