
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Hoisting.

*/

function showName() {
    console.log('First Name: ' + name);
    var name = 'Ford';
    console.log('Last Name: ' + name);
}

showName();

function otherShowName() {                  // This is how the original function
    var name;                               // actually works. 
    console.log('First Name: ' + name);     // The hoisting ONLY refers to the 
    name = 'Ford';                          // DECLARATION NOT the ASSIGNMENT
    console.log('Last Name: ' + name);
}
