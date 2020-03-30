const assert = require('assert');
const has = require('./');

describe('has', () => {
	it('checks that the object has a property', () => {
		const obj = {foo: 'bar', func: function(){}};

		assert.ok(has(obj, 'foo'));
	});

	it('returns false if the object doesn\'t have the property', () => {
		const obj = {foo: 'bar', func: function(){}};

		assert.ok(!has(obj, 'baz'));
	});

	it('checks that the object has a property that is a function', () => {
		const obj = {foo: 'bar', func: function(){}};

		assert.ok(has(obj, 'func'));
	});

	it('works when the hasOwnProperty method is deleted', () => {
		const obj = {foo: 'bar', func: function(){}};

		obj.hasOwnProperty = null;
		assert.ok(has(obj, 'foo'));
	});

	it('does not check the prototype chain for a property', () => {
		const obj = {foo: 'bar', func: function(){}};

		function Child() {}
		Child.prototype = obj;
		const child = new Child();

		assert.ok(!has(child, 'foo'));
	});

	it('returns false for null', () => {
		assert.strictEqual(has(null, 'foo'), false);
	});

	it('returns false for undefined', () => {
		assert.strictEqual(has(void 0, 'foo'), false);
	});

	it('can check for nested properties', () => {
		assert.ok(has({a: {b: 'foo'}}, ['a', 'b']));
	});

	it('does not check the prototype of nested props', () => {
		const obj = {foo: 'bar', func: function(){}};

		function Child() {}
		Child.prototype = obj;
		const child = new Child();

		assert.ok(!has({a: child}, ['a', 'foo']));
	});
});