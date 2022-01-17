import _ from 'lodash';

export const isPlainObject = (potentialObject) => {
	return typeof potentialObject === 'object' && !Array.isArray(potentialObject) && potentialObject !== null;
};

export const makePairs = (obj) => {
	if (obj === null) return [];
	if (Array.isArray(obj)) return [];
	const answer = Object.entries(obj);
	return answer;
};

export const without = (obj, prop) => {
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

export const isEmpty = (obj) => {
	return _.isEmpty(obj);
};

export const isEqualDeep = (obj1, obj2) => {
	return _.isEqual(obj1, obj2);
};

export const getUserName = () => {
	return 'user_james';
}
console.log(0.1 + 0.2);