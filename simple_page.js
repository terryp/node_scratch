
'use strict';

// Basic imports. 
// async - Do things asynchronously
// cheerio - Fast parser using jQuery selectors
// request - Wrapper to make requests and parse responses

var async = require('async');
var cheerio = require('cheerio');
var request = require('request');

// Basic Page class. 
// Pulls in a response and a body and uses those elements in tandem with
// cheerio to set basic properties of the class itself. 

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

// This is actually the heart of the matter. It's a function that will
// accept a URL parameter, go get it and then create a simple Page object
// and then print out the description of the page. 

function get(url) {
    console.log("\nGoing to " + url);
    request(url, function (err, res, body) {
        if (err) throw err; 

        var testPage = new Page(res,body);

        testPage.description();
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

