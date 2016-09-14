
/*jslint node: true */

'use strict';

// Transpilation. 
// babeljs.io

// Destructuring
var foo = {
    bar: 1, 
    baz: 2
};

var {bar, baz} = foo;

console.log(bar);
