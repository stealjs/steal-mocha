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
mocha.run("bdd");
```

and your tests will automatically be ran.
