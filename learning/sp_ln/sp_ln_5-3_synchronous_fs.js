
/*

This is unoriginal thought. Basically, I'm working through some execises in 
Shelly Powers' 'Leaning Node' book - specically Chapter 5 / Control Flow.

*/

'use strict';

var fs = require ('fs');

try {
	var data = fs.readFileSync("./data/scratch.txt", "utf-8");
	console.log(data);
	var adjustData = data.replace(/[A|a]pple/g, 'orange');

	fs.writeFileSync('./data/adjusted_scratch.txt', adjustData);
} catch (err) {
	console.error(err);
}
