/*jslint node: true */

'use strict';

function showName(firstName, lastName) {
    var nameIntro = 'Your name is ';
    
    function makeFullName() {
        return nameIntro + firstName + ' ' + lastName;
    }

    return makeFullName();
}

console.log(showName('Terry', 'Peppers'));
