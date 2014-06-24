
'use strict';

/*

A remedial examination of how to loop over a container. In this case it's an
array. I wanted to take a peek at all the ways that I think I know how 
to do this. 

*/ 

var async = require('async');                   // Needed for later. This is
                                                // akin to importing a library
                                                // in Python. 

var items = [1,2,3,4];                          // Here's the target array
                                                // that I'll be looping over.

console.log("What Am I Looping Over?!");        // Log what you're doing.
console.log(items);
console.log("\n");

console.log ("Standard Looping");               // Here's the typical way of
for (var i = 0; i < items.length; i++) {        // looping using a C style 
	console.log(items[i] + 1);                  // counter. 
}
console.log("\n");

console.log ("For In Looping");                 // Here's another way to loop
for (var i in items) {                          // using the for-in approach.
	console.log(items[i] + 1);                  // This is more similar to how                 
    //(function(ind){ console.log(ind)}(i));    // MANDERSON WANTS AND IFFE!
}                                               // I prefer to loop in Python.
console.log("\n");


console.log("For Each Looping")                 // And yet another way! This
items.forEach(function(i) {                     // is a for-each loop which
	console.log(i + 1);                         // seems more similar to IIRC
});                                             // a Ruby block or a Python
console.log("\n");                              // list comprehension.


console.log("Async Looping");                   // Still another way, async!
var add_one = function(x, doneCallback) {       // Need to define a function
	console.log(x + 1);                         // in order for this to work.
	return doneCallback(null);                  // Well, you could use an
}                                               // anonymous function but this
                                                // seems a little more explicit.

async.each(items, add_one, function(err) {
	console.log("\n");
})
