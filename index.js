export default function toArray(object, customOptions) {
	const defaults = {
		keyName: 'key',
		valueName: 'value',
	}

	const options = Object.assign(defaults, customOptions)

	return Object.keys(object).map(key =>
		({
			[options.keyName]: key,
			[options.valueName]: object[key],
		}),
	)
}
