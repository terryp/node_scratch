

'use strict';

function addGenerator(num) {
    return function(toAdd) {
        return num + toAdd;
    }
}

var addFive = addGenerator(5);

console.log(addFive(4));
