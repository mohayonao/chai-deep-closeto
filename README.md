# deep.closeTo for chai

[![Build Status](http://img.shields.io/travis/mohayonao/chai-deep-closeTo.svg)](https://travis-ci.org/mohayonao/chai-deep-closeTo)

## Installation and Usage

```sh
npm install chai-deep-closeTo
```

```javascript
var chai = require("chai");
var chaiDeepCloseTo = require("chai-deep-closeTo");

chai.use(chaiDeepCloseTo);
```

## Assertion

```javascript
expect([ 1.00001, 2.00001, 3.00001, 4.00001 ]).to.be.clsTo([ 1, 2, 3, 4 ], 1e-4);
```

```javascript
expect([ 1.00001, 2.00001, 3.00001, 4.00001 ]).to.be.deep.closeTo([ 1, 2, 3, 4 ], 1e-4);
```
