
'use strict';

// (function() {
//     console.log('Declared, anonymous and immediately execucted');
// })();

function testFunction() {
    console.log('Declared and named!');
}

// Invoking testFunction
testFunction();

var anotherTestFunction = function() {
    console.log('Variable holding a function!');
}

var oneMoreTestFunction = anotherTestFunction;

anotherTestFunction();
oneMoreTestFunction();
