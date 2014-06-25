
'use strict';

var fs = require('fs');
var cheerio = require('cheerio');

// var html = fs.readFileSync('index.html').toString();
// var parsedHtml = cheerio.load(html);

// var title = parsedHtml('title').text();
// var metaDescription = parsedHtml('meta[name=description]').attr('content');
// var metaAuthor = parsedHtml('meta[name=author]').attr('content');
// var metaKeywords = parsedHtml('meta[name=keywords]').attr('content');
// var form = parsedHtml('form').attr('name');

// console.log(title);
// console.log(metaDescription);
// console.log(metaAuthor);
// console.log(metaKeywords);
// console.log(form);

// THIS SHIT IS FOR LATER!
// See http://maxogden.com/scraping-with-node.html

var Page = function(body) {
    this.rawHtml = fs.readFileSync(body).toString();
    this.parsedHtml = cheerio.load(this.rawHtml);
}

Page.prototype = {
    constructor: Page,
    getTitle: function() {
        return this.parsedHtml('title').text();
    },
    getMeta: function() {
        return this.parsedHtml('meta[name=description]').attr('content');
    },
    getFormTitle: function() {
        return this.parsedHtml('form').attr('name');
    }
}

var rawPage = './index.html';
var testPage = new Page(rawPage);

console.log(testPage.rawHtml);
console.log(testPage.getTitle());
console.log(testPage.getMeta());
console.log(testPage.getFormTitle());
