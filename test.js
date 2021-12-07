import test from 'ava'
import toArray from './index.js'

test('main', t => {
	t.deepEqual(toArray({a: 1, b: 2}), [
		{
			key: 'a',
			value: 1,
		},
		{
			key: 'b',
			value: 2,
		},
	])
})
