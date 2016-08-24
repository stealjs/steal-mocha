import mocha from "steal-mocha";

describe("A module", function(){

  it("A test", function(){
    console.assert("it works");
	console.assert(mocha.__stealMocha, "require file parsed");
  });

});
