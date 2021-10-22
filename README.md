# has-util ![Build Status](https://github.com/jonkemp/has-util/actions/workflows/main.yml/badge.svg?branch=master)

> Check if an object has a given key.

Inspired by `_.has`. 😄


## Install

Install with [npm](https://npmjs.org/package/has-util)

```
$ npm install has-util
```

Or [unpkg](https://unpkg.com/has-util/)

```
<script src="https://unpkg.com/has-util@1.0.0/umd/index.js" />
```

Check out the unit tests on [CodePen](https://codepen.io/jonkemp/full/vYObWNL).

## Usage

```js
const has = require('has-util');

has({a: 1, b: 2, c: 3}, 'b');
//=> true
```

---
| **Like us a lot?** Help others know why you like us! **Review this package on [pkgreview.dev](https://pkgreview.dev/npm/has-util)** | ➡   | [![Review us on pkgreview.dev](https://i.ibb.co/McjVMfb/pkgreview-dev.jpg)](https://pkgreview.dev/npm/has-util) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------- |

## API

### has(object, key)

#### object

Type: `objecct`  
Default: `none`

The objecct to look in.

#### key

Type: `string`  
Default: `none`

The key to search for.

## License

MIT
