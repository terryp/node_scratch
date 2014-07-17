
'use strict';

var fs = require('fs');                 // One of Node's 'batteries included'

var async = require('async');           // Do things asynchronously
var cheerio = require('cheerio');       // Parser with jQuery API - no DOM
var request = require('request');       // Make requests and get responses

// Basic Page class. 
// Pulls in a response and a body and uses those elements in tandem with
// cheerio to set basic properties of the class itself. 

function Page(type, res, body) {

    var type = type;
    this.type = getType();
    this.response = res;
    this.statusCode = res.statusCode;
    this.body = body;
    this.html = getParseStrategy();

    this.title = this.html('title').text();
    
    this.metaDescription = this.html('meta[name=description]').attr('content');
    
    this.metaAuthor = this.html('meta[name=author]').attr('content');
    
    this.metaKeywords = this.html('meta[name=keywords]').attr('content');
    
    this.getLinks = function() {
        var links = {};
        var temp = this.html;
        temp('a').each(function() {
            var link = temp(this);
            var text = link.text();
            var href = link.attr('href');
            links[text] = href;
        });
        return links;
    }

    this.getSummary = function() {
        var summary = {
            'title': this.title,
            'metaDescription': this.metaDescription,
            'metaAuthor': this.metaAuthor,
            'metaKeywords': this.metaKeywords,
        };  
        return summary;  
    }

    function getParseStrategy() {
        if (type == 'static') {
            return cheerio.load(fs.readFileSync(body).toString());
        } else if (type == 'dynamic') {
            return cheerio.load(body);
        }
    }

    function getType() {
        return type;
    }
}

// This is actually the heart of the matter. It's a function that will
// accept a URL parameter, go get it and then create a simple Page object
// and then print out the description of the page. 

function get(url) {
    console.log("Going to " + url);
    request(url, function (err, res, body) {
        if (err) throw err; 

        var testPage = new Page('dynamic', res, body);

        if (testPage.statusCode == 200) {
            console.log(testPage.getSummary());    
            console.log(testPage.getLinks());
        }
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

