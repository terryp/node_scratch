/*jslint node: true */

'use strict';

function addNumbers(x, y) {
    // Not defensive
    return x + y;
}

console.log(addNumbers(21, 21));
console.log(addNumbers(21, '21'));

function addNumbersDefense(x, y) {
    // Oh, I know! 
    // I'll type check!
    if (typeof x != 'number' || typeof y != 'number') {
        throw Error('Bad Parameters');
    };

    return x + y;
}

console.log(addNumbersDefense(21, 21));
//console.log(addNumbersDefense(21, '21'));

function addNumbersMoreDefense(x, y) {
    // What about coercion!
    x = Number(x);
    y = Number(y);

    return x + y;
}

console.log(addNumbersMoreDefense(21, 21));
console.log(addNumbersMoreDefense(21, '21'));
