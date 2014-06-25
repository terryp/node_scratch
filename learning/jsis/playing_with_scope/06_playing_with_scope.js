
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

More on gloabl variables and variable initialization.

*/

function showAge() {            // This would work as expected if I didn't
    age = 38;                   // have strict on. But since I do - this 
    console.log(age);           // doesn't work as the example says it does
}                               // in fact, strict prevents you from
                                // things that could get you into trouble!
showAge();

console.log(age);
