'use strict'

module.exports = function (obj) {
	return Object.keys(obj).map(function (key) {
		return {
			key: key,
			value: obj[key]
		}
	})
}
