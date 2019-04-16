/*jslint node: true */

'use strict';

var request = require('request');
var cheerio = require('cheerio');

var targetUrl = 'http://www.imdb.com';

request.get(targetUrl, function(err, res, body) {
    if (err) throw err;
    parsePage(body, res);
});

function parsePage(body, res) {
    var formDetail = {};
    var html = cheerio.load(body);

     html('form').each(function() {
        var form = html(this);
        var name = form.attr('name');
        if (name === undefined) {
            name = form.attr('id');
        }
        var action = form.attr('action');
        var method = form.attr('method')
        formDetail[name] = {'action': action, 'method': method};
    });

    var fields = {};
    
    html('form input').each(function() {
        var field = html(this);
        var id = field.attr('id');
        var type = field.attr('type');
        var name = field.attr('name');
        fields[id] = {'type': type, 'name': name};
    });

    formDetail.fields = fields;   

    submitForm(targetUrl, formDetail);
}

function submitForm(targetUrl, formDetail) {
    var path = targetUrl + formDetail['navbar-form']['action'];
    var action = formDetail['navbar-form']['method'];
    var field = formDetail['fields']['navbar-query']['name'];

    request.get(path + "?q=Top+Secret", function(err, res, body) {
        if (err) throw err;
        processResult(res, body);
    })
}

function processResult(res, body) {
    var html = cheerio.load(body);
    console.log(html('title').text());
    console.log(html('.findSearchTerm').text());
}
