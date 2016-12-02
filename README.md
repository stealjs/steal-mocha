[![Build Status](https://travis-ci.org/stealjs/steal-mocha.svg?branch=master)](https://travis-ci.org/stealjs/steal-mocha)
[![npm version](https://badge.fury.io/js/steal-mocha.svg)](http://badge.fury.io/js/steal-mocha)

# steal-mocha

Provides an easy way to automatically run Mocha tests using [StealJS](http://stealjs.com).

## Use

Add the Steal tag to your page

```html
<script src="node_modules/steal/steal.js"
  mocha="bdd"
  main="test/test"></script>
```

This will do the equivalent of

```js
mocha.setup("bdd");
```

and your tests will automatically be ran.

## Writing tests

When you write tests just be sure to import `steal-mocha`.

```js
import "steal-mocha";

describe("Foo", function(){
  it("bar", function(){
    assert("yay!");
  });
});
```

## Use with Bower / manually

If you are not using NPM the following configuration is necessary:

```js
System.config({
  "paths": {
      "steal-mocha": "path/to/steal-mocha/steal-mocha.js",
      "steal-mocha/*": "path/to/steal-mocha/*.js",
      "mocha": "path/to/mocha/mocha.js",
      "mocha/mocha.css": "path/to/mocha/mocha.css"
  },
  "meta": {
      "mocha": {
          "format": "global",
          "exports": "mocha",
          "deps": [
              "steal-mocha/add-dom"
          ]
      }
  }
});
```

## mocha.opts

Mocha's runner allows for a [mocha.opts](https://mochajs.org/#mochaopts) file,
specifying addition options such as `checkLeaks()`. `steal-mocha` does not parsed
a `mocha.opts` file, however allows the specification of a startup script.

This is similar to the `--require` option in `mocha.opts`.

```html
<script src="node_modules/steal/steal.js"
  mocha-require="test/setup"
  main="test/test"></script>
```

_The path in `data-mocha-require` is a module name._

__test/setup.js__
```js
const chai = require('chai');
const sinon = require('sinon');

module.exports = function(mocha) {
  sinon.assert.expose(chai.assert, { prefix: '' });
};
```

_The above example extends Chai's assertion library with SinonJS assertions._

## License

MIT
