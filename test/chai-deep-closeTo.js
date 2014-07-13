describe("chai-deep-closeTo", function() {
  "use strict";

  function err(func) {
    expect(function() {
      func();
    }).to.throw(AssertionError);
  }

  describe("closeTo", function() {
    it("work", function() {
      expect(1.00001).to.be.closeTo(1, 1e-4);
    });

    it("failed", function() {
      err(function() {
        expect(1.00001).to.be.closeTo(1, 1e-6);
      });
    });
  });

  describe("clsTo", function() {
    it("work", function() {
      expect(1.00001).to.be.clsTo(1, 1e-4);
      expect([ 1.00001, [ 2.00001, 3.00001 ], 4.00001 ]).to.be.clsTo([ 1, [ 2, 3 ], 4 ], 1e-4);
    });

    it("failed", function() {
      err(function() {
        expect(1.00001).to.be.clsTo([ 1, 2 ], 1e-4);
      });
      err(function() {
        expect([ 1.00001, 2.00001 ]).to.be.clsTo(1, 1e-4);
      });
      err(function() {
        expect([ 1.00001, 2.00001, 3.00001, 4.00001 ]).to.be.clsTo([ 1, 2, 3 ], 1e-4);
      });
      err(function() {
        expect([ 1.00001, 2.00001, 3.00001 ]).to.be.clsTo([ 1, 2, 3, 4 ], 1e-4);
      });
      err(function() {
        expect([ 1.00001, 2.00001, 3.00001, 4.001 ]).to.be.clsTo([ 1, 2, 3, 4 ], 1e-4);
      });
    });
  });


  describe("deep.closeTo", function() {
    it("work", function() {
      expect(1.00001).to.be.deep.closeTo(1, 1e-4);
      expect([ 1.00001, [ 2.00001, 3.00001 ], 4.00001 ]).to.be.deep.closeTo([ 1, [ 2, 3 ], 4 ], 1e-4);
    });
  });

});
