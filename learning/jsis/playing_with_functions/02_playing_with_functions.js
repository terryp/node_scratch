
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

Second, functions that take arguments as parameters!

*/

function greeting(s) {					// This is declaration. We create
	console.log('Hello, ' + s + '!');	// a new function and name it greeting.
}										// This time, however, we change the 
										// function so that it can take in a
										// string and print out 
										// 'Hello <SUPPLIED STRING>!'

greeting();								// This is invocation but it's missing
										// the parameter. It will print 
										// 'Hello undefined' since - in essence
										// - we passed in a undefined string.

greeting('JavaScript');					// This is invocation but now we have
										// a parameter. In this case it's 
										// the string JavaScript so the 
										// function will return 
										// 'Hello, JavaScript'

