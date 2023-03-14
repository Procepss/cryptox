/**
 *  Test regular expressions  equality
 *
 * @see https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 *
 * @param {RegExp} x
 * @param {RegExp} y
 * @returns
 */
const regexEqual = (x, y) =>
	x instanceof RegExp &&
	y instanceof RegExp &&
	x.source === y.source &&
	x.global === y.global &&
	x.ignoreCase === y.ignoreCase &&
	x.multiline === y.multiline;

module.exports = { regexEqual };
