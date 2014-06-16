
'use strict';

var fs = require('fs');
var path = require('path');

var data = path.resolve('../data/number.txt');	

var myNumber = undefined;

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
	console.log(myNumber)
}

addOne(logMyNumber)				// OK, getting around these means a little 
								// surgery. We add a callback param to the 
								// addOne function and we declear a new 
								// function who's responsibility it to 
								// print out the number ... the callback
								// will be called last when addOne is 
								// done doing it's thing.
