
'use strict';

var fs = require('fs');

var readStream = fs.createReadStream('/var/log/system.log');

readStream.on('data', function(data) {
    console.log(data);
});

readStream.on('end', function() {
    console.log('file ended')
})
