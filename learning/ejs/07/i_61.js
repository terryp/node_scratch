/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

console.log('Item 61: Don\'t Block the Event Queue on IO\n');

var file = path.resolve('../../data', 'lebowski.txt');

function textSync(f) {
    console.log('Starting SYNC Read File');
    var text = fs.readFileSync(f);
    text = text.toString();
    console.log('Finished SYNC Read File');    
    console.log('\n');
};

textSync(file);

var text_async = fs.readFile(file, function(err, text) {
    text = text.toString();
    console.log('Finished ASYNC Read File');
})

console.log('Starting ASYNC Read File');
