/*jslint node: true */

'use strict';

var FormData = require('form-data');
var request = require('request');

// So I need to know that there's a form on the page. 
// I need to know the 'action' of that form
// I need to know that there are 'input' fiels of this form. 
// I need to know the 'name' of that input field.
 
var r = request.post('', function (err, res, body) {
    if (err) throw err;
    console.log('Search successful. Response:\n', body);
});

var form = new FormData();
form.append('q', 'node_scratch');

form.submit('http://www.github.com/search', function(err, res) {
    if (err) throw err;
    console.log(res.statusCode);
    console.log(res.headers);
});
