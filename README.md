# chai-deep-closeto
[![NPM Version](http://img.shields.io/npm/v/chai-deep-closeto.svg?style=flat)](https://www.npmjs.org/package/chai-deep-closeto)
[![Build Status](http://img.shields.io/travis/mohayonao/chai-deep-closeto.svg?style=flat)](https://travis-ci.org/mohayonao/chai-deep-closeto)
[![Dependency Status](http://img.shields.io/david/mohayonao/chai-deep-closeto.svg?style=flat)](https://david-dm.org/mohayonao/chai-deep-closeto)
[![Dependency Status](http://img.shields.io/david/dev/mohayonao/chai-deep-closeto.svg?style=flat)](https://david-dm.org/mohayonao/chai-deep-closeto)

Provides `deep.closeTo` for the [Chai](http://chaijs.com/) assertion library.

## Installation

#### Node.js

`chai-deep-closeto` is available on npm.

```sh
$ npm install chai-deep-closeto
```

```javascript
var chai = require("chai");
var chaiDeepCloseTo = require("chai-deep-closeto");

chai.use(chaiDeepCloseTo);
```

#### Browser

include [chai-deep-closeto.js](http://mohayonao.github.io/chai-deep-closeto/test/chai-deep-closeto.js) after including `chai.js`

```html
<script src="chai.js"></script>
<script src="chai-deep-closeto.js"></script>
```

## Assertions

#### clsTo(expected, delta)

- @param _{ Array  }_ expected
- @param _{ Number }_ delta
- @param _{ String }_ message \_optional\_

Asserts that the target is deeply equal **expected**, to within a +/- **delta** range.

```javascript
expect([ 1.5, [ 2.5, 3.5 ], 4.5 ]).to.be.clsTo([ 1, [ 2, 3 ], 4 ], 0.5);
```

#### deep.closeTo(expected, delta)

`deep.closeTo` is aliased to `clsTo`

```javascript
expect([ 1.5, [ 2.5, 3.5 ], 4.5 ]).to.be.deep.closeTo([ 1, [ 2, 3 ], 4 ], 0.5);
```

## Examples

- [Online Test Suites](http://mohayonao.github.io/chai-deep-closeto/)
