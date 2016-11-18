@module {mocha} steal-mocha
@parent StealJS.ecosystem
@group steal-mocha.config Config

**steal-mocha** will automatically run your tests once all tests are loaded.

@option {mocha}

Calls [mocha.setup()](https://mochajs.org/#browser-configuration) with the provided [steal-mocha.config.mocha] config. Waits for [steal.done], at which time all tests will have been loaded, and then calls [mocha.run()](https://mochajs.org/#browser-specific-methods) which will run the tests.

Returns the mocha object.

@body

## Use

Add the Steal tag to your page

```html
<script src="node_modules/steal/steal.js"
  mocha="bdd"></script>
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

