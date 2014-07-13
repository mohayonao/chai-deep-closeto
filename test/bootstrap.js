"use strict";

global.chai = require("chai");

(function(global, chai) {

  global.expect         = chai.expect;
  global.AssertionError = chai.AssertionError;

  global.chai.use(require("../lib/chai-deep-closeTo"));

})(global, global.chai);
