/*

This is unoriginal thought. Basically, I'm working through some execises in 
Shelly Powers' 'Leaning Node' book - specically Chapter 5 / Control Flow.

*/

'use strict';

var obj = function () { };

obj.prototype.doSomething = function(arg1, arg2) {
	var arg2 = typeof(arg2) === 'string' ? arg2 : null;
	var callback = arguments[arguments.length - 1];
	callback = (typeof(callback)) === 'function' ? callback : null;
	if (!arg2) {
		return callback(new Error('second arg missing or not string'));
	}
	callback(arg1);
}

var test = new obj();

try {
	test.doSomething('test', '3.55', function(err, value) {
		if (err) {
			throw err;
		}
		console.log(value)
	});
} catch (err) {
	console.error(err);
}
