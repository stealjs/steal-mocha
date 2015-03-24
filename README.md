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

## License

MIT
