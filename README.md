# chai-deep-closeTo
[![NPM Version](http://img.shields.io/npm/v/chai-deep-closeTo.svg?style=flat)](https://www.npmjs.org/package/chai-deep-closeTo)
[![Build Status](http://img.shields.io/travis/mohayonao/chai-deep-closeTo.svg?style=flat)](https://travis-ci.org/mohayonao/chai-deep-closeTo)
[![Dependency Status](http://img.shields.io/david/mohayonao/chai-deep-closeTo.svg?style=flat)](https://david-dm.org/mohayonao/chai-deep-closeTo)
[![Dependency Status](http://img.shields.io/david/dev/mohayonao/chai-deep-closeTo.svg?style=flat)](https://david-dm.org/mohayonao/chai-deep-closeTo)

Provides `deep.closeTo` for the [Chai](http://chaijs.com/) assertion library.

## Installation

#### Node.js

`chai-deep-closeTo` is available on npm.

```sh
$ npm install chai-deep-closeTo
```

```javascript
var chai = require("chai");
var chaiDeepCloseTo = require("chai-deep-closeTo");

chai.use(chaiDeepCloseTo);
```

#### Browser

include [chai-deep-closeTo.js](http://mohayonao.github.io/chai-deep-closeTo/test/chai-deep-closeTo.js) after including `chai.js`

```html
<script src="chai-deep-clostTo.js"></script>
```

## Assertions

#### clsTo(expected, delta)

- @param _{ Array  }_ expected
- @param _{ Number }_ delta
- @param _{ String }_ message \_optional\_

Asserts that the target is deeply equal **expected**, to within a +/- **delta** range.

```javascript
expect([ 1.00001, 2.00001, 3.00001, 4.00001 ]).to.be.clsTo([ 1, 2, 3, 4 ], 1e-4);
```

#### deep.closeTo(expected, delta)

`deep.closeTo` is aliased to `clsTo`

```javascript
expect([ 1.00001, 2.00001, 3.00001, 4.00001 ]).to.be.deep.closeTo([ 1, 2, 3, 4 ], 1e-4);
```

## Examples

- [Oneline Test Suites](http://mohayonao.github.io/chai-deep-closeTo/)
