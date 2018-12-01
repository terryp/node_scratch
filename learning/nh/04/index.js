//
// 04/index.js
//

'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, resp) => {
    resp.render('home', {
        name: 'Terry'
    });
});

app.listen(3000);

