/*jslint node: true */

'use strict';

var foo = true;

function something(b) {
    return b;
}

if (foo) {
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar);
}

console.log(bar);
