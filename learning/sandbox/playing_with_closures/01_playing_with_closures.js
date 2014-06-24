
'use strict';

/*

You aren't going to understand Node if you don't understand closures. 

Closures have access to the global scope, enclosing scope and local scope.

*/

function showName(firstName, lastName) {
    var nameIntro = 'Your name is: ';
    function makeFullName() {
        return nameIntro + firstName + ' ' + lastName;
    }
    return makeFullName();
}

console.log(showName('Terry', 'Peppers'));
