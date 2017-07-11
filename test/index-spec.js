var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index');

describe('sanitize', function() {

	// Add a "hook". Perform this before each "it" block.
	// Do it just once by using "before".
	beforeEach(function(){
		console.log('--- Before ---');
	});
	after(function(){
		console.log('--- After ---');
	});

	//it.only('returns lower case of a string', function() { // ONLY run this "it" block
	//it.skip('returns lower case of a string', function() { // SKIP this "it" block		
	it('returns lower case of a string', function() {
		var inputWord = 'HELLO WORLD';
		var outputWord = word.sanitize(inputWord);

		expect(outputWord).to.equal('hello world');
		expect(outputWord).to.not.equal('HELLO WORLD');
		expect(outputWord).to.be.a('string');
		expect(outputWord).to.not.be.a('number');
		expect(outputWord).to.contain('hello');
	});
	it('removes hyphens', function() {
		var inputWord = 'HELLO-WORLD';
		var outputWord = word.sanitize(inputWord);

		expect(outputWord).to.equal('hello world');
	});
});

describe('tokenize', function() {
	it('returns an array of words', function() {
		var sentence = "hello world";
		var tokenizedSentence = word.tokenize(sentence);
		
		expect(tokenizedSentence).to.include.members(['hello', 'world']);
	}); 
})

describe('Github info', function() {	
	it('returns repo info from Github', function(done) {	// Add callback
		word.info(function(reply) {
			console.log(reply);
			expect(reply.language).to.equal('JavaScript');
			expect(reply.watchers).to.equal(157);
			done();	// Execute callback
		})
		console.log("hello");
	})
})
