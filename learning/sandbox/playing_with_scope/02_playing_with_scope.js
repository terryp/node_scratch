
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Really basic scope at the block level.

*/

var name = 'Terry';         // This is a global variable.

if (name) {                 // Basic conditional looking for some 'name.'
    name = 'Ian';           // Change the value of 'name' to 'Ian'
    console.log(name);      // This will print 'Ian.'
}

console.log(name);          // This will also print 'Ian' since we changed
                            // the value of the global.
