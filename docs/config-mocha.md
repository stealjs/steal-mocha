@page steal-mocha.config.mocha mocha
stuff here
@parent steal-mocha.config
@description

The **mocha** option specifies the user-interface passed into `mocha.setup()`. This option is passed through Steal [config.config] like:

```html
<script src="./node_modules/steal/steal.js" mocha="bdd"></script>
```

The following are the possible values:

* **bdd**
* **tdd**
* **qunit**
* **exports**

See [mocha's documentation](https://mochajs.org) for more on the user-interfaces.
