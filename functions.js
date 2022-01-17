const _ = require('lodash');

const isPlainObject = (potentialObject) => {
	return typeof potentialObject === 'object' && !Array.isArray(potentialObject) && potentialObject !== null;
};

const makePairs = (obj) => {
	if (obj === null) return [];
	if (Array.isArray(obj)) return [];
	const answer = Object.entries(obj);
	return answer;
};

const without = (obj, prop) => {
	const entries = Object.entries(obj);
	const retObj = {};
	for (const entry of entries) {
		const key = entry[0];
		const value = entry[1];
		if (key !== prop) {
			retObj[key] = value;
		}
	}
	return retObj;
};

const isEmpty = (obj) => {
	return _.isEmpty(obj);
};

const isEqualDeep = (obj1, obj2) => {
	return _.isEqual(obj1, obj2);
};

module.exports = { isPlainObject, makePairs, without, isEmpty, isEqualDeep };