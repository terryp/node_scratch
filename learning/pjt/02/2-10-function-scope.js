
'use strict';

var foo = 'test';

// Here's a block
if (true) {
    var foo = 'new test';
}

// This passes because there isn't such a thing a block level scope 
// in JavaScript
console.assert(foo == 'new test');

function test() {
    var foo = 'old test';
}

test();

// This passes because there is such a thing as function level scope
// in JavaScript
console.assert(foo == 'new test');
