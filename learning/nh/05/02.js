//
// 05/01.js -- Storing stuff in a global variable
//

/* jshint node: true */
'use strict';

const fs = require('fs');

const express = require('express');

const app = express();

app.post('/users', function(req, resp) {
    const user = req.body;
    fs.appendFile('./users.txt', JSON.stringify(
        {
            name: user.name,
            age: user.age
        }), (err) => {
            res.send('Success.');
        }
    );
});
