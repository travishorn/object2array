export default function toArray(object, customOptions) {
	const defaults = {
		keyName: 'key',
	}

	const options = Object.assign(defaults, customOptions)

	return Object.keys(object).map(key =>
		({
			[options.keyName]: key,
			value: object[key],
		}),
	)
}
