
'use strict';

var fs = require('fs');
var path = require('path');

var file = path.resolve('../../data/adjusted_scratch.txt');

fs.open(file, 'a', function(err, fd) {
    var writeBuffer = new Buffer('Writing this string!');
    var bufferOffset = 0;
    var bufferLength = writeBuffer.length;
    var filePosition = null;

    fs.write(
        fd, 
        writeBuffer,
        bufferOffset,
        bufferLength,
        filePosition,
        function(err, written) {
            if (err) throw err;
            console.log('Wrote %d bytes', written);
        }
    );
});
