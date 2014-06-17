
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

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
