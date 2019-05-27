@page steal-mocha.config.mochaRequire mochaRequire
@parent steal-mocha.config
@description

Mocha's runner allows for a [mocha.opts](https://mochajs.org/#mochaopts) file where you specify additional options such as `checkLeaks()`. [steal-mocha] does not parse
a `mocha.opts` file but instead allows the specification of a startup script through **mochaRequire**.

This is similar to the `--require` option in `mocha.opts`.

```html
<script src="node_modules/steal/steal.js"
  mocha-require="test/setup"
  main="test/test"></script>
```

_The path in `mocha-require` is a module name._

__test/setup.js__

```js
const chai = require('chai');
const sinon = require('sinon');

module.exports = function(mocha) {
  sinon.assert.expose(chai.assert, { prefix: '' });
};
```

_The above example extends Chai's assertion library with SinonJS assertions._

