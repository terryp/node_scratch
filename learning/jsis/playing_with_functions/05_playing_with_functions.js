
'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

Functions are first class citizens!

1. Put a function in a variable. 
2. Put a function in a container / object.

*/

var util = require('util');

function what_are_you(a) {
    console.log(typeof(a));
    console.log(util.inspect(a));
    console.log('\n');
}

// Function in a variable
var a_variable_storing_a_function = function() {
    console.log('Just a function in here!');
}

what_are_you(a_variable_storing_a_function)

// Function in an object
var container_object = {};

var another_var_storing_a_function = function() {
    console.log('I am still just a function.');
}

container_object.a_function = another_var_storing_a_function;

what_are_you(container_object.a_function);

// Function in an array

var container_array = [];

container_array.push(
    a_variable_storing_a_function, 
    another_var_storing_a_function
);

container_array.forEach(function(x) {
    x();
})
