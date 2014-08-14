/*jslint node: true */

'use strict';

var fs = require('fs');
var htmlparser = require('htmlparser');
var request = require('request');

var configFileName = './rss_feeds.txt';

function checkForRSSFile() {
    fs.exists(configFileName, function(exists) {
        if (!exists) {
            return next(new Error('Missing RSS file:' + configFileName));
        }
        next(null, configFileName);
    });
}

function readRSSFile(configFileName) {
    fs.readFile(configFileName, function(err, feedList) {
        if (err) return next(err);

        feedList = feedList
                        .toString()
                        .replace(/^\s+\s+$/g, '')
                        .split('\n');
        var random = Math.floor(Math.random() * feedList.length);
        next(null, feedList[random]);
    });
}

function downloadRSSFeed(feedUrl) {
    request({uri: feedUrl}, function(err, res, body) {
        if (err) return next(err);
        if (res.statusCode != 200) {
            return next(new Error('Abnormal response status code'));
        }
        next(null, body);
    });
}

function parseRSSFeed(rss) {
    var handler = new htmlparser.RssHandler();
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(rss);

    if (!handler.dom.items.length) {
        return next(new Error('No RSS items found'));
    }

    var item = handler.dom.items.shift();
    console.log(item.title);
    console.log(item.link);
}

var tasks = [
    checkForRSSFile,
    readRSSFile,
    downloadRSSFeed,
    parseRSSFeed
];

function next(err, result) {
    if (err) throw err;
    var currentTask = tasks.shift();
    if (currentTask) {
        currentTask(result);
    }
}

next();
