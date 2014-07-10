
'use strict';

/*
Print the size of a file in bytes.
*/

var fs = require('fs');
var path = require('path');

var file = path.resolve('../../data/adjusted_scratch.txt');
var base = path.basename(file);

fs.stat(file, function(err, stats) {
    console.log('The file - %s - is %d bytes in size', base, stats.size);
});
