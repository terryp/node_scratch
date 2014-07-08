
'use strict';

var async = require('async');
var cheerio = require('cheerio');
var request = require('request');

var Page = function(res, body) {
    this.response = res;
    this.statusCode = res.statusCode;
    this.body = body;
    this.parsedHtml = cheerio.load(this.body);
    this.title = this.parsedHtml('title').text();
    this.metaDescription = this.parsedHtml('\
        meta[name=description]').attr('content');
    this.metaAuthor = this.parsedHtml('meta[name=author]').attr('content');
    this.metaKeywords = this.parsedHtml('meta[name=keywords]').attr('content');

    this.description = function() {
        console.log(this.statusCode);
        console.log(this.title);
        console.log(this.metaDescription);
        console.log(this.metaAuthor);
        console.log(this.metaKeywords);
    }
}

function get(url) {
    console.log("\nGoing to " + url);
    request(url, function (err, res, body) {
        if (err) throw err; 

        var testPage = new Page(res,body);

        testPage.description();
    });
}

var urls = [
    "http://www.google.com",
    "http://www.yahoo.com",
    "http://www.espn.com",
    "http://www.chicagotribune.com",
]

async.each(urls, get, function(err) {
    console.log("\n");
})

