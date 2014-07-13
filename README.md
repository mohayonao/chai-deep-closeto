# deep.closeTo for chai
[![NPM Version](http://img.shields.io/npm/v/chai-deep-closeTo.svg?style=flat)](https://www.npmjs.org/package/chai-deep-closeTo)
[![Build Status](http://img.shields.io/travis/mohayonao/chai-deep-closeTo.svg?style=flat)](https://travis-ci.org/mohayonao/chai-deep-closeTo)
[![Dependency Status](http://img.shields.io/david/dev/mohayonao/chai-deep-closeTo.svg?style=flat)](https://david-dm.org/mohayonao/chai-deep-closeTo)

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

## Online Test Suite

- http://mohayonao.github.io/chai-deep-closeTo/
