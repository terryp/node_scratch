
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

More global variables and scope work.

*/

for (var i = 1; i <= 10; i++) {
    console.log(i);                 // Prints 1-10
}                                   // Standard looping

function aNumber() {                // 'i' is global though! So this function
    console.log(i);                 // has the ability to access it. 
}

aNumber();
