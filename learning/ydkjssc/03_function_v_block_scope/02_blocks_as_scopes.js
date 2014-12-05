/*jslint node: true */

'use strict';

var foo = true; 

function something(a) {
    
}

if (foo) {
    var bar = foo * 2;
    bar = something(bar);
    console.log(bar);
}
