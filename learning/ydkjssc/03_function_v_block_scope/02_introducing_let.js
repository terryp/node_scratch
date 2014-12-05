/*jslint node: true */

'use strict';

var foo = true;

function something(a) {
    return a;
}

if (foo) {
    {  // Explicitly set block scope!
        let bar = foo * 2;
        bar = something(bar);
        console.log(bar);
    }
}

console.log(bar);
