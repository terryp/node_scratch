//
// 04/error.js
//

'use strict';

const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    throw new Error('oops!');
});

app.use((err, req, resp, next) => {
    console.log(err);
    resp.status(500).send('Something broke!');
});

app.listen(3000);
