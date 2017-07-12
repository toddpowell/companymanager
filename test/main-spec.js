const chai = require('chai');
const expect = require('chai').expect;
const main = require('../js/main');
const sinon  = require('sinon');
const assert = require('assert');


// Use sinon and assert to check console.log
describe('sayHello', function(){
	it('Says "Hello"', function(){
		// "spy" on `console.log()`
		let spy = sinon.spy(console, 'log');

		// call the function that needs to be tested
		main.sayHello("Hello");

		// assert that it was called with the correct value
		assert(spy.calledWith("Hello"));

		// restore the original function
		spy.restore();		
	})
})
