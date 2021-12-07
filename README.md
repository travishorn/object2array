# object2array [![NPM version](https://img.shields.io/npm/v/object2array.svg)](https://npmjs.com/package/object2array) [![NPM downloads](https://img.shields.io/npm/dm/object2array.svg)](https://npmjs.com/package/object2array) [![Build Status](https://img.shields.io/circleci/project/egoist/object2array/master.svg)](https://circleci.com/gh/egoist/object2array)

> Convert an object to array.

## Install

```bash
$ npm install --save object2array
```

## Usage

```js
const object2array = require('object2array')

object2array({
	foo: 'blah',
	bar: 'oops'
})
/*
[
	{
		key: 'foo',
		value: 'blah'
	},
	{
		key: 'bar',
		value: 'oops'
	}
]
*/
```

## Options

`keyName`

Default: `'key'`

Example:

```js
object2array({
	foo: 'blah',
	bar: 'oops'
}, {
	keyName: 'id',
})

/*
[
	{
		id: 'foo',
		value: 'blah'
	},
	{
		id: 'bar',
		value: 'oops'
	}
]
*/
```

---

`valueName`

Default: `'value'`

Example:

```js
object2array({
	foo: 'blah',
	bar: 'oops'
}, {
	valueName: 'data',
})

/*
[
	{
		key: 'foo',
		data: 'blah'
	},
	{
		key: 'bar',
		data: 'oops'
	}
]
*/

```

## License

MIT © [EGOIST](https://github.com/egoist)
