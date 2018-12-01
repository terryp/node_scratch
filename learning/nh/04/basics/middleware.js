//
// 04/middleware.js
//

const express = require('express');
const app = express();

app.use((req, resp, next) => {
    console.log(req.headers);
    next();
})

app.use((req, resp, next) => {
    req.chance = Math.random();
    next();
})

app.get('/', (req, resp) => {
    resp.json({
        chance: req.chance
    });
});

app.listen(3000);
