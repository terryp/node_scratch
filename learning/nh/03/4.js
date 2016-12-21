// 
// 03/4.js
//

'use strict';

const fs = require('fs');

console.log('START reading a file ... ');

fs.readFile('file.md', 'utf-8', function(err, content) {
    if (err) {
        console.log('ERROR reading file ...');
        return console.log(err);
    }

    console.log(content);
})

console.log('END of file ... ')
