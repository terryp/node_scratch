
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

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

1. Using the function constructor
2. Using function declaration
3. Creating a function expression

*/



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

