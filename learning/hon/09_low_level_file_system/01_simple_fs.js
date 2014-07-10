
'use strict';

var fs = require('fs');
var path = require('path');

var file = path.resolve('../../data/adjusted_scratch.txt');

fs.stat(file, function(err, stats) {
    if (err) throw err;
    console.log('This file is %d bytes long', stats.size);
    console.log(stats);
})
