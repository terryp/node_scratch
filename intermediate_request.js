/*jslint node: true */

'use strict';

var async = require('async');
var jsdom = require('jsdom');
var request = require('request');

// Go to a page
// Get the <title> element

function get(url) {
	console.log("\nGoing to " + url);
	request(url, function (err, res, body) {
		if (err) throw err;

		findTitle(body, url);
	});
}

function findTitle(html) {
	jsdom.env(html, ["http://code.jquery.com/jquery.js"], function(err, window) {
		if (err) throw err;

		// FIXME: Should this be a var and how does it return?
		console.log("<TITLE>", window.$("title").text());
	});
}

var urls = [
	"http://www.google.com",
	"http://www.yahoo.com",
	"http://www.espn.com",
	"http://www.chicagotribune.com",
];

async.each(urls, get, function(err) {
	console.log("\n");
});

console.log("\nThis is the order of the actual array - ");
urls.forEach(function (u){
	console.log(u);
});
