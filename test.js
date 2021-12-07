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

test('rename key', t => {
	t.deepEqual(toArray({a: 1, b: 2}, {keyName: 'id'}), [
		{
			id: 'a',
			value: 1,
		},
		{
			id: 'b',
			value: 2,
		},
	])
})

test('rename value', t => {
	t.deepEqual(toArray({a: 1, b: 2}, {valueName: 'data'}), [
		{
			key: 'a',
			data: 1,
		},
		{
			key: 'b',
			data: 2,
		},
	])
})
