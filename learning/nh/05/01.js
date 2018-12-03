//
// 05/01.js -- Storing stuff in a global variable
//

/* jshint node: true, esversion: 6 */

'use strict';


const express = require('express');
const users = [];

const app = express();

app.post('/users', function(req, resp) {
    const user = req.body;
    users.push({
        name: user.name,
        age: user.age
    });

    resp.send('Success. You are registered.');
});
