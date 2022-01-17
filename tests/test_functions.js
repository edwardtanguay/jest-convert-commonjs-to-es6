import { expect, test } from '@jest/globals';
import * as functions from '../functions.js';

test('isPlainObject() is correctly implemented', () => {
	expect(functions.isPlainObject('aaaaaaaaa')).toBe(false);
	expect(functions.isPlainObject([])).toBe(false);
	expect(functions.isPlainObject(123)).toBe(false);
	expect(functions.isPlainObject({ name: 'ok' })).toBe(true);
	expect(functions.isPlainObject(false)).toBe(false);
	expect(functions.isPlainObject(true)).toBe(false);
	expect(functions.isPlainObject(undefined)).toBe(false);
	expect(functions.isPlainObject(null)).toBe(false);
});

test('makePairs() is correctly implemented', () => {
	expect(functions.makePairs({ a: 1, b: 2 })).toStrictEqual([['a', 1], ['b', 2]]);
	expect(functions.makePairs({ a: 1, ok: 2, name: 'Georg' })).toStrictEqual([['a', 1], ['ok', 2], ['name', 'Georg']]);
	expect(functions.makePairs({})).toStrictEqual([]);
	expect(functions.makePairs(null)).toStrictEqual([]);
	expect(functions.makePairs([])).toStrictEqual([]);
	expect(functions.makePairs([1, 2, 3])).toStrictEqual([]);
	expect(functions.makePairs(false)).toStrictEqual([]);
	expect(functions.makePairs(true)).toStrictEqual([]);
});

test('without() is correctly implemented', () => {
	expect(functions.without({ a: 1, b: 2 }, 'b')).toStrictEqual({ a: 1 });
	expect(functions.without({ a: 1, b: 2 }, 'a')).toStrictEqual({ b: 2 });
	expect(functions.without({ a: 1, b: 2 }, 'c')).toStrictEqual({ a: 1, b: 2 });
});

test('isEmpty() is correctly implemented', () => {
	expect(functions.isEmpty({ a: 1, b: undefined })).toBe(false);
	expect(functions.isEmpty({})).toBe(true);
});

test('isEqualDeep() is correctly implemented', () => {
	expect(functions.isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
	expect(functions.isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 2 } })).toBe(false);
});

it('matches if username has the correct prefix', () => {
	expect(functions.getUserName()).toEqual(expect.stringMatching('^user_'));
});
