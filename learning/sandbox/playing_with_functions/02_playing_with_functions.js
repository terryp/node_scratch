
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

<<<<<<< HEAD
Second, functions that take arguments as parameters!

*/

function greeting(string) {				// This is declaration. We create
	console.log('Hello, ' + string);	// a new function and name it greeting.
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
=======
Arguments and functions.

*/

function greeting(s) {                  // Same function as before, but this
    console.log('Hello, ' + s + '!');   // now takes an argument - 
}                                       // specifically a string. 

greeting()                              // Little trick here, since no                       
                                        // argument is passed and a default
                                        // argument isn't supplied this will 
                                        // say 'Hello, undefined!'

greeting('Argument');                   // This works as we would expect.                                  
>>>>>>> 7490e120b93bd830542dfa2f48de90114b902601
