
'use strict';

/*

You aren't going to understand Node if you don't understand closures. 

Closures rules and side effects. Closures have access to the outer function’s 
variable even after the outer function returns!

*/

function celebrityName(firstName) {
    var nameIntro = 'The name of the celebrity is: ';
    function lastName(theLastName) {
        return nameIntro + firstName + ' ' + theLastName;
    }
    return lastName;
}
