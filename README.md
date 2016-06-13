# range-array

[![npm](https://img.shields.io/npm/dt/range-array.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/range-array)
[![npm](https://img.shields.io/npm/v/range-array.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/range-array)
[![npm](https://img.shields.io/npm/l/range-array.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/range-array)

Easily generate a range from a set of two numbers. Tries to approximate the [range function from python](http://pythoncentral.io/pythons-range-function-explained/).

Automatically determines wether the step value should be interpreted as a negative or a positive number.

# Installation

```sh
npm install --save range-array
```

# Usage

Ranges are generated from a start number(inclusive), end number(exclusive) and an incrementor. The incrementor is optional.

```javascript
const range = require('range-array');

range(0, 5);
// [0, 1, 2, 3, 4]

range(5, -2);
// [5, 4, 3, 2, 1, 0, -1]

range(0, 100, 20);
// [0, 20, 40, 60, 80]
```

# API

### range(start, end[, incrementor = 1]) => array
Returns an array containing all numbers between the start (inclusive) and the end(exclusive). By passing an incrementor, the rate at which the numbers grow can be determined. The default value for the incrementor is 1.

```javascript
range(-100, 50, 50)
// [-100, -50, 0]
```

# License
COPYRIGHT (c) 2016 [Leonard Schuetz](https://leonardschuetz.ch/about)

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
