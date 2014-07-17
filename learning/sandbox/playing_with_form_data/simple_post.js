
'use strict';

var http = require('http');
var util = require('util');

var FormData = require('form-data');
var request = require('request');

// So I need to know that there's a form on the page. 
// I need to know the 'action' of that form
// I need to know that there are 'input' fiels of this form. 
// I need to know the 'name' of that input field.

var form = new FormData();
form.append('q', 'Top Secret!');

var url = "http://www.imdb.com";
var action = "/find";


request({
    uri: 'http://www.imdb.com/find',
    method: 'GET',
    form : {
        'q': 'Top Secret!'
    }
}, function(err, res, body) {
    console.log(res.statusCode);
    console.log(body);
})


// request.post(url + action, form);

// var request = http.request({
//     method: 'post',
//     host: 'www.imdb.com',
//     path: '/find',
//     headers: form.getHeaders(),
// });

// console.log(request);

// form.pipe(request);

// request.on('response', function(res) {
//     console.log(res.statusCode);
//     res.resume();
// })
