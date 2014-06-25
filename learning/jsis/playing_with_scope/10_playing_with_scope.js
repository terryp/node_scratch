'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Don't pollute the global scope. 

*/

var firstName, lastName;                // Polluting global scope!

function fullName() {
    console.log('Full Name: ' + firstName + ' ' + lastName);
}

function betterFullName() {
    var firstName = 'Terry';            // Keep variables where they belong
    var lastName = 'Peppers';           // in the local scope!
    console.log('Full Name: ' + firstName + ' ' + lastName);
}

betterFullName();
