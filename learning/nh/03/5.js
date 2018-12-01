//
// 03/5.js 
//

'use strict';

const async = require('async');
const fs = require('fs');


async.parallel(
    ['file.md', 'file2.md', 'file3.md'], fs.stat, function(err, res) {
        if (err) {
            console.log(err);
        }

        console.log(res);
    }
)
