
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

Getting into trouble with scope, or really ill-defined scope.

*/

var name = 'Terry Peppers';

function showPersonName() {
    console.log(name);
}

function showCelebrityName() {
    var name = 'Julius Peppers';    // Toggle this with a var and without
    console.log(name);              // a var to get the effect you want.
}

showPersonName();                   // Should print 'Terry Peppers'
showCelebrityName();                // Should print 'Julius Peppers'
showPersonName();                   // You'd think it would print 'Terry 
                                    // Peppers' but we actually were able
                                    // to overwrite the value of the global
                                    // var name in the showCelebrityName()
                                    // function.
                                    // 
                                    // If we add a var to keep the value of the
                                    // the name var local to the function then
                                    // it works as we expect.
