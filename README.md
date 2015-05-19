# steal-mocha

Provides an easy way to automatically run Mocha tests using [StealJS](http://stealjs.com).

## Use

Add the Steal tag to your page

```html
<script src="node_modules/steal/steal.js"
  data-mocha="bdd"
  data-main="test/test"></script>
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

## License

MIT
