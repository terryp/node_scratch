
'use strict';

var fs = require('fs');
var cheerio = require('cheerio');

var raw = fs.readFileSync('./index.html').toString();
var html = cheerio.load(raw);

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
        forms[name] = [action, method];

        // get input fields!
        
    });
    return forms;
}

console.log(getLinks());
console.log(getForms());
