
/*

This is unoriginal thought. Basically, I'm working through some execises in 
Shelly Powers' 'Leaning Node' book - specically Chapter 5 / Control Flow.

*/

'use strict';

var fs = require('fs');

try {
	fs.readFile('./data/scratch.txt', 'utf8', function(err, data) {
		if (err) throw err;
		var adjustData = data.replace(/[A|a]pple/g, 'orange');
		fs.writeFile('./data/scratch_3.txt', adjustData, function(err) {
			if (err) throw err;
		});
	});
} catch(err) {
	console.error(err.stack);
}
