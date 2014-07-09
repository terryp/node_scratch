
'use strict';

var async = require('async');           // Do things asynchronously
var cheerio = require('cheerio');       // Parser with jQuery API - no DOM
var request = require('request');       // Make requests and get responses

// Basic Page class. 
// Pulls in a response and a body and uses those elements in tandem with
// cheerio to set basic properties of the class itself. 

function Page(res, body) {
    this.response = res;
    this.statusCode = res.statusCode;
    this.body = body;
    this.parsedHtml = cheerio.load(this.body);
    this.title = this.parsedHtml('title').text();
    this.metaDescription = this.parsedHtml('\
        meta[name=description]').attr('content');
    this.metaAuthor = this.parsedHtml('meta[name=author]').attr('content');
    this.metaKeywords = this.parsedHtml('meta[name=keywords]').attr('content');
}

Page.prototype.getStatusCode = function() {
    return this.statusCode;
}

Page.prototype.getDescription = function() {
    var description = {
        'title': this.title,
        'metaDescription': this.metaDescription,
        'metaAuthor': this.metaAuthor,
        'metaKeywords': this.metaKeywords,
    };
    return description;
}

// This is actually the heart of the matter. It's a function that will
// accept a URL parameter, go get it and then create a simple Page object
// and then print out the description of the page. 

function get(url) {
    console.log("\nGoing to " + url);
    request(url, function (err, res, body) {
        if (err) throw err; 

        var testPage = new Page(res,body);

        console.log(testPage.getStatusCode());
        console.log(testPage.getDescription());
    });
}

// Simple array of URLs

var urls = [
    "http://www.google.com",
    "http://www.yahoo.com",
    "http://www.espn.com",
    "http://www.chicagotribune.com",
]

// Ah ha! Some wild and crazy stuff. Asynchronously run through the list of
// URLs and pass in the get function.  

async.each(urls, get, function(err) {
    if (err) throw err;
})

