import test from 'ava'
import toArray from './'

test('main', t => {
	t.same(toArray({a: 1, b: 2}), [
		{
			key: 'a',
			value: 1
		},
		{
			key: 'b',
			value: 2
		}
	])
})
