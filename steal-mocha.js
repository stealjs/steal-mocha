"format amd";
define(["mocha/mocha", "@loader", "mocha/mocha.css!"], function(mocha, System){
	if(System.mocha) {
		var opts = System.mocha;
		mocha.setup(opts);
	}

	var getOpts;


	if(System.mochaRequire) {
		getOpts = System.import(System.mochaRequire).then(function(mochaConfig) {
			return mochaConfig.default || mochaConfig;
		});
	}
	else {
		getOpts = Promise.resolve(function() {});
	}

	steal.done().then(function() {
		if (window.Testee && window.Testee.init) {
			window.Testee.init();
		}

		return getOpts;
	}).then(function(mochaConfig) {
		mochaConfig(mocha);
		mocha.run();
	});

	return mocha;
});
