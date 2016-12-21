//
// 03/6.js
//

'use strict';

const fs = require('fs');

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

Promise.all([
        stats('file.md'),
        stats('file2.md'),
        stats('file3.md'),
])
.then((data) => console.log(data))
.catch((err) => console.log(err));
