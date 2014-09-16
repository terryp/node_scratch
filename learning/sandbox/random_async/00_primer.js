/*jslint node: true */

'use strict';

function maybe() {
    console.log('... execute async maybe?');
}

function proveIt() {
    setTimeout(maybe, 0);
    console.log('I am a function, I was invoked.');
    console.log('but I will queue up another function declared and invoked above');
    // FIXME this doesn't execute in Node
    return "and you will then ....";
}

console.log(proveIt());
