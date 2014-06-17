<<<<<<< HEAD

=======
>>>>>>> 7490e120b93bd830542dfa2f48de90114b902601
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

<<<<<<< HEAD
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
=======
The three ways to write functions. 

As a guy who used to claim to write Python, I was pretty accustomed to the
very singular approach to writing functions. Functions are like this:

    >>> def greeting():
    ...     print "Hello, World!"
    ...
    >>> greeting()
    Hello, World!
    >>> def greeting(s):
    ...     print "Hello, %s!" % s
    ...
    >>> greeting("Argument")
    Hello, Argument!
    >>>

JavaScript provides three different ways for programmers to define a function. 
>>>>>>> 7490e120b93bd830542dfa2f48de90114b902601

1. Using the function constructor
2. Using function declaration
3. Creating a function expression

*/

<<<<<<< HEAD
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
=======
// Function Constructor

var greeting_fc = new Function(         // Declare a variable and create a
    "s",                                // new function by calling the
    "console.log('Hello, ' + s + '!')"  // Function object. RTD ....
);                                      // http://mzl.la/1kHqEVi

greeting_fc('Function Constructor');

// Function Declaration

function greeting_fd(s) {               // The early examples used this form
    console.log('Hello, ' + s + '!');   // of function declaration. I think 
}                                       // this is also called a function
                                        // literal.

greeting_fd('Function Declaration');

// Function Expression

var greeting_fe = function (s) {        // Remarkably similar to the first and
    console.log("Hello, " + s + "!");   // second ... the notion of anonymous
}                                       // functions comes into play here
                                        // as well. 

greeting_fe('Function Expression');
>>>>>>> 7490e120b93bd830542dfa2f48de90114b902601
