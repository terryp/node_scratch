/*jslint node: true */

'use strict';

// Node 'Batteries Included'
var http = require('http'),
    url = require('url'),
    querystring = require('querystring');

// API Library
var Api = function(url, path, qs) {
    var self = this;
    self.url = url;
    self.path = path;
    self.qs = qs;

    if (!self.url) {
        throw new Error('URL is required.');
    }

    if (!self.path) {
        throw new Error('Path is required.');
    }

    if (!self.qs) {
        throw new Error('QueryString is required.');
    }
};

Api.prototype.buildUrl = function() {
    var self = this;
    var qs = querystring.stringify(self.qs);
    var target = url.resolve(self.url, self.path) + '?' + qs;
    return target;
};

Api.prototype.fetchData = function(cb) {
    var self = this;
    var target = self.buildUrl(); 
    var payload = {'status code' : '', 'body' : ''};

    http.get(target, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
            payload['status code'] = res.statusCode;
            payload['body'] = body;
            cb(payload);                            // RIGHT FUCKING HERE
        });
    });
};

// DEBUG DOES THIS THING WORK?!
// var endpoint = 'http://not_real.com';
// var path = '/customer_scoring/';
// var qs = {'income': 50000, 'zipcode': 60201, 'age': 35};

// var myApi = new Api(endpoint, path, qs);

// console.log(myApi.url);
// console.log(myApi.path);
// console.log(myApi.qs);

// console.log(myApi.buildUrl());

// myApi.fetchData(function(results) {
//     var foo = results;
//     console.log(foo['status code']);
// });

module.exports = Api; 
