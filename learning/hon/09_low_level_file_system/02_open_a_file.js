
'use strict';

var fs = require('fs');
var path = require('path');

var file = path.resolve('../../data/adjusted_scratch.txt');

fs.open(file, 'r', function(err, fd) {
    if (err) throw err;

    var readBuffer = new Buffer(1024);
    var bufferOffset = 0;
    var bufferLength = readBuffer.length;
    var filePosition = 100;

    fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, 
        function(err, readBytes) {
            if (err) throw err;
            console.log('Just read %d bytes', readBytes);
            if (readBytes > 0) {
                console.log(readBuffer.slice(0, readBytes));
            }
        });
});
