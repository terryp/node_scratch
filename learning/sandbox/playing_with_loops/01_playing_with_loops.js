/*jslint node: true */

'use strict';

/*

A remedial examination of how to loop over a container. In this case it's an
array. I wanted to take a peek at all the ways that I think I know how 
to do this. 

*/ 

var items = [1,2,3,4];                          // Here's the target array
                                                // that I'll be looping over.

console.log('What Am I Looping Over?!');        // Log what you're doing.
console.log(items);
console.log('\n');

console.log ('Standard Looping');               // Here's the typical way of
for (var i = 0; i < items.length; i++) {        // looping using a C style 
	console.log(items[i] + 1);                  // counter. 
}
console.log('\n');

console.log ('For In Looping');                 // Here's another way to loop
for (var i in items) {                          // using the for-in approach.
	console.log(items[i] + 1);                  // This is more similar to how                 
}                                               // I prefer to loop in Python.
console.log('\n');


console.log('For Each Looping');                // And yet another way! This
items.forEach(function(i) {                     // is a for-each loop which
	console.log(i + 1);                         // seems more similar to IIRC
});                                             // a Ruby block or a Python
console.log('\n');


var async = require('async');                   // Now that we've taken a look
                                                // at the built in ways to do
                                                // this, how about using 
                                                // external libs.

console.log('Async Looping');                   // Still another way, async!
var add_one = function(x, doneCallback) {       // Need to define a function
    console.log(x + 1);                         // in order for this to work.
    return doneCallback(null);                  // Well, you could use an
};                                              // anonymous function but this
                                                // seems a little more explicit.

async.each(items, add_one, function() {
	console.log('\n');
});

var _ = require('underscore');                  // What about the underscore.js?

console.log('Underscore Looping - Each');
_.each(items, function(num) { 
    console.log(num + 1); 
});
