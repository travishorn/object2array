export default function toArray(object) {
	return Object.keys(object).map(key =>
		({
			key,
			value: object[key],
		}),
	)
}
