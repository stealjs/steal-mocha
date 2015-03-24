"format cjs";
if(!document.getElementById("mocha")) {
  var mocha = document.createElement("div");
  mocha.id = "mocha";
  (document.body || document.documentElement).appendChild(mocha);
}
if(!document.getElementById("page")) {
  var page = document.createElement("div");
  page.id = "page";
  var testArea = document.createElement("div");
  testArea.id = "test-area";
  page.appendChild(testArea);
  (document.body || document.documentElement).appendChild(page);
}
