//
// 05/03.js -- Let's talk to PostGreSQL
//

/* jshint node: true */
'use strict';

const pg = require('pg');

const config = {
}

pg.connect(connString, function(err, client, done) {
    if (err) {
        return console.error('ERROR: Unable to connect', err);
    }
});
