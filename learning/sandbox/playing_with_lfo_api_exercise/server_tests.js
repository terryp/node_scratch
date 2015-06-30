/*jslint node: true */

'use strict';

var server = require('./server.js');

var http = require('http');

var request = require('request');

function get(url, callback) {
    var request = http.get(url);
    request.on('response', function(response) {
        var responseText = '';
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
            responseText += chunk;
        });
        response.on('end', function() {
            callback(response, responseText);
        });
    })
}

exports.setUp = function(done) {
    server.start(3000, function() {
        done();
    });
}

exports.tearDown = function(done) {
    server.stop(function() {
        done();
    });
}

exports.test_one = function(test) {
    get('http://127.0.0.1:3000', function(response, responseText) {
        test.equals(200, response.statusCode, 'Status Code');
        test.done();
    });
}
