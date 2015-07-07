
/*jslint node: true */

'use strict';

// Node Batteries Included
var fs = require('fs');
var path = require('path');

// Putting the number file somewhere other than our code. 
// Yay! Path munging!
var data = path.resolve('../data/number.txt');	

// Declare a variable name 'myNumber' but we don't know it's value
// since the value is in the variable 'data' which will pluck it from
// the file. This is a punt. 
var myNumber = undefined;

function showOriginal(callback) {
	fs.readFile(data, function doneReading(err, fileContents) {
		myNumber = parseInt(fileContents);
		callback();
	})
}

function addOne(callback) {
	fs.readFile(data, function doneReading(err, fileContents) {
		myNumber = parseInt(fileContents);
		myNumber++;
		callback();
	});
}

// console.log(myNumber);		// You can't read this top down like I am 
								// accustomed too ... This is async and
								// so when the script is invoked ...
								// myNumber is undefined, addOne is called
								// to do something ... Node doesn't block
								// in that it allows me to log the undefined
								// value of myNumber because it happens
								// before addOne() has finished.

function logMyNumber() {
	console.log(myNumber);
}

showOriginal(logMyNumber);

addOne(logMyNumber);			// OK, getting around these means a little 
								// surgery. We add a callback param to the 
								// addOne function and we declear a new 
								// function who's responsibility it to 
								// print out the number ... the callback
								// will be called last when addOne is 
								// done doing it's thing.
