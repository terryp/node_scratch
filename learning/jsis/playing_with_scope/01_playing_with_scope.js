
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Really basic scope at the function level.

*/

var name = 'Terry';

function showName() {
    var name = 'Ian';           // Scope of this var is only between the braces
    console.log(name);          // This will print 'Ian.'
}

console.log(name)               // This will print 'Terry.'
                                // 'Ian' however never prints since we only
                                // delcared the function, we didn't invoke it.
