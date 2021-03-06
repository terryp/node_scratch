
'use strict';

var fs = require('fs');
var http = require('http');

var cheerio = require('cheerio');
var request = require('request');

var raw = fs.readFileSync('./index.html').toString();
var html = cheerio.load(raw);

// var moreRaw = request('http://www.imdb.com', function(err, res, body) {
//     if (err) throw err;
//     return cheerio.load(body);
// });

// console.log(moreRaw);

/* 

What would a form look like in JSON?

form = {
    id: integer,
    name: string,
    action: string,
    method: string, 
    fields : { keys: values }
    button : { keys: values }
}

*/

var revisedGetForm = function() {
    var forms = {};
    
    html('form').each(function() {
        var form = html(this);
        var name = form.attr('name');
        if (typeof name = 'undefined') {
            name = form.attr('id');
        }
        var action = form.attr('action');
        var method = form.attr('method')
        forms[name] = {'action': action, 'method': method};
    });

    var fields = {};
    
    html('form input').each(function() {
        var field = html(this);
        var id = field.attr('id');
        var type = field.attr('type');
        var name = field.attr('name');
        fields[id] = {'type': type, 'name': name};
    });

    forms.fields = fields;

    var buttonDetail = {};

    html('form button').each(function() {
        var button = html(this);
        var type = button.attr('type');
        var text = button.text();
        buttonDetail = {'type': type, 'text': text};
    });

    forms.button = buttonDetail;

    return forms; 
}


var getLinks = function() {
    var links = {};
    html('a').each(function() {
        var link = html(this);
        var text = link.text();
        var href = link.attr('href');
        links[text] = href;
    });
    return links;
}

var getForms = function() {
    var forms = {};
    html('form').each(function() {
        var form = html(this);
        var name = form.attr('name');
        var action = form.attr('action');
        var method = form.attr('method')
        forms[name] = {'action': action, 'method': method};
    });
    return forms;
}

var getFormFields = function() {
    var fields = {};
    html('form input').each(function() {
        var field = html(this);
        var id = field.attr('id');
        var type = field.attr('type');
        var name = field.attr('name');
        fields[id] = {'type': type, 'name': name};
    });
    return fields;
}

var getFormButton = function() {
    var buttonDetail = {};
    html('form button').each(function() {
        var button = html(this);
        var type = button.attr('type');
        var text = button.text();
        buttonDetail = {'type': type, 'text': text};
    });
    return buttonDetail;
}

// console.log(getLinks());
// console.log(getForms());
// console.log(getFormFields());
// console.log(getFormButton());

console.log(revisedGetForm());
