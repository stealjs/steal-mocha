"format amd";
define(["mocha/mocha", "mocha/mocha.css!"], function(mocha){
	if(System.mocha) {
		var opts = System.mocha;
		mocha.setup(opts);
	}

	steal.done().then(function() {
		if (window.Testee) {
			Testee.init();
		}
		mocha.run();
	});

	return mocha;
});
