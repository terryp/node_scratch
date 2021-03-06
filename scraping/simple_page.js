/*jslint node: true */

'use strict';
                                        // Node 'built ins'
var fs = require('fs');                 // - File System
var events = require('events');         // - Event Emitter
var util = require('util');             // - Convenience 

                                        // External libraries
var _ = require('underscore');          // Make my life more like Python
var async = require('async');           // Do things asynchronously
var cheerio = require('cheerio');       // Parser with jQuery API - no DOM
var request = require('request');       // Make requests and get responses

// Basic Page class.
// Pulls in a response and a body and uses those elements in tandem with
// cheerio to set basic properties of the class itself.

var Page = function(url) {
    var self = this;

    self.url = url;

    console.log("fetching " + self.url + "\n");
    request(this.url, function (err, res, body) {
        if (err) throw err;

        self.html = cheerio.load(body);

        self.emit('fetched');
    });
};

// add events to Page
util.inherits(Page, events.EventEmitter);

Page.prototype.title = function() {
    var self = this;

    return self.html('title').text();
};

Page.prototype.metaDescription = function() {
    var self = this;

    return self.html('meta[name=description]').attr('content');
};

Page.prototype.metaAuthor = function() {
    var self = this;

    return self.html('meta[name=author]').attr('content');
};

Page.prototype.metaKeywords = function() {
    var self = this;

    return self.html('meta[name=keywords]').attr('content');
};

Page.prototype.summary = function() {
    var self = this;

    return {
        title: self.title(),
        metaDescription: self.metaDescription(),
        metaAuthor: self.metaAuthor(),
        metaKeywords: self.metaKeywords()
    };
};

Page.prototype.links = function() {
    var self = this;

    return _.map(self.html('a'), function(value, key, list) {
        var link = self.html(value);
        return {
            text: link.text(),
            href: link.attr('href')
        };
    });
};

var urls = [
    "http://www.google.com",
    "http://www.yahoo.com",
    "http://www.espn.com",
    "http://www.chicagotribune.com",
];

// The asych happens, but not here

_.each(urls, function(element, index, list){
    var page = new Page(element);
    page.on('fetched', function(){
        console.log("\n=========================================================\n");
        console.log(page.url + " fetched\n");

        console.log(page.summary());
        console.log(page.links());
    });
});

