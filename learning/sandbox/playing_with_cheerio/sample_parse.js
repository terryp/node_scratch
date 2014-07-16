
'use strict';

var fs = require('fs');
var cheerio = require('cheerio');

var raw = fs.readFileSync('./index.html').toString();
var html = cheerio.load(raw);

var links = {}

html('a').each(function() {
    var link = html(this);
    var text = link.text();
    var href = link.attr('href');
    links[text] = href;
})

console.log(links);
