
'use strict';

var async = require('async');

var items = [1,2,3,4];

// What Am I Looping Over?
//
console.log("What Am I Looping Over?!")
console.log(items);
console.log("\n");

// Standard Looping
//
console.log ("Standard Looping");
for (var i = 0; i < items.length; i++) {
	console.log(items[i] + 1);
}
console.log("\n");

// For In Looping
//
console.log ("For In Looping");
for (var i in items) {
	console.log(items[i] + 1);
}
console.log("\n");

// For Each Looping
//
console.log("For Each Looping")

items.forEach(function(i) {
	console.log(i + 1);
});
console.log("\n");


// Async Looping
//
console.log("Async Looping");

var add_one = function(x, doneCallback) {
	console.log(x + 1);
	return doneCallback(null);
}

async.each(items, add_one, function(err) {
	console.log("\n");
})
