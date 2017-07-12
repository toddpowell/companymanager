exports.sanitize = function(word) {
	console.log("calling sanitize()");
	return word.toLowerCase().replace(/-/g, ' ');
}
exports.sayHello = function(text) {
	console.log(text);
}