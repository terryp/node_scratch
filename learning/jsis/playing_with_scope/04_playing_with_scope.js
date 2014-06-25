
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Interplay of global and local variables in the context of functions.

*/

var name = 'Terry';         // Global variable

function users() {          // Function - scope
    var name = 'Ian';       // Variable only available inside of scope
    console.log(name);      // Because it's there it trumps or 
}                           // supercedes the global variable.

users();
