
'use strict';

var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');

var Page = function(body) {
    this.rawHtml = fs.readFileSync(body).toString();
    this.parsedHtml = cheerio.load(this.rawHtml);
    this.title = this.parsedHtml('title').text();
    this.metaDescription = this.parsedHtml(
        'meta[name=description]').attr('content'
    );
    this.metaAuthor = this.parsedHtml('meta[name=author]').attr('content');
    this.metaKeywords = this.parsedHtml(
        'meta[name=keywords]').attr('content'
    );
    this.form = this.parsedHtml('form').attr('name');
}

// Static attempt at using the Page object. 
var rawPage = './index.html';
var testPage = new Page(rawPage);

console.log(testPage.title);
console.log(testPage.metaDescription);
console.log(testPage.metaKeywords);
console.log(testPage.metaAuthor);
console.log(testPage.form);

console.log('-----------------------------------');

// Will it work with request, though. 
var url = 'http://www.swordstyle.com';
var options = {
    headers: {
        'User-Agent': 'request 0.26.0'
    }
}

request(url, options, function(err, res, body) {
    if (err) throw err;
    console.log(body);
    // var anotherTestPage = new Page(body);
    // console.log(anotherTestPage.title);
});
