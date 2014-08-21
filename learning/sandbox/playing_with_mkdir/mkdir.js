/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

function mkdir() {
    var here = path.resolve(__dirname);
    var there = path.join(here, 'over/there');
    
    console.log(here);
    console.log(there);

    fs.mkdir(there, function(err) {
        if (err) throw err;
        console.log('Created: ' + there);
    });
}

mkdir();
