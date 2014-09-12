/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

var jsdom = require('jsdom');
var request = require('request');
var xmlhttprequest = require('xmlhttprequest');

var url = 'http://qa.get-started.devry.edu/non-brand?cb[xp]=nonbrand';

var here = path.resolve(__dirname);
var file = 'index.html';

// FIXME jsdom configuration HERE

var html = request.get(url, function(err, res, body) {
  if (err) throw err;
  return body;
});

var doc = jsdom.jsdom(html, null, {
  features: {
    FetchExternalResources: ['script', 'img', 'css', 'link'],
    ProcessExternalResources: ['script'],
    MutationEvents: '2.0',  
  }
});

var window = doc.createWindow();

jsdom.jQueryify(
  window, 
  'https://code.jquery.com/jquery-1.11.1.min.js', 
  function() {
    console.log(window.a);
    console.log(window.$().jquery);
});

