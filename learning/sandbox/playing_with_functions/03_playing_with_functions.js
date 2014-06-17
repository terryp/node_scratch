
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

Third, as a guy who used to think he could write Python I was simply very 
used to the notion that there's only ONE WAY to do that in Python. 

	>>> def greeting():
	...     print "Hello, World"
	...
	>>> greeting()
	Hello, World
	>>> def greeting(string):
	...     print "Hello, %s" % string
	...
	>>> greeting("JavaScript")
	Hello, JavaScript
	>>>

There are three ways to write functions in JavaScript. 

1. Using the function constructor
2. Using function declaration
3. Creating a function expression

*/

// 1. Using the function constructor

var greeting_fc = new Function(				// Declare a variable but call 'new'
	"string", 								// to make a new Function object. 
	"console.log('Hello ,' + string + '!')"	// Docs - http://mzl.la/1kHqEVi
);											// Can take any number of args
											// and has some body ... in this 
											// case 'Hello, <STRING>'

greeting_fc('Function Constructor');		// Invoke the function. 

// 2. Using function declaration

function greeting_fd(string) {
	console.log('Hello, ' + string + '!');
}

greeting_fd('Function Declaration');
