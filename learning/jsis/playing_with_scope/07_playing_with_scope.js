
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Global variables and lack of block level scope. 

*/

var firstName = 'Terry';

{
    var firstName = 'Ian';
}

function showFirstName() {
    var firstName = 'Owen';
    console.log(firstName);
}

console.log(firstName);         // Again, no block level scope. 
                                // it doesn't matter that 'Ian' is in the 
                                // brackets ... unless you use function
                                // blocking ... then a new set of rules applies

showFirstName();
