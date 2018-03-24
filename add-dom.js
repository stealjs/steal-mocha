"format cjs";
if(!document.getElementById("mocha")) {
  var mocha = document.createElement("div");
  mocha.id = "mocha";
  (document.body || document.documentElement).appendChild(mocha);
}
if(!document.getElementById("page")) {
  var fixture = document.createElement("div");
  fixture.id = "mocha-fixture";
  (document.body || document.documentElement).appendChild(fixture);
}
