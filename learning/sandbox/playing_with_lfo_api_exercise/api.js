/*jslint node: true */

'use strict';

// Node 'Batteries Included'
var http = require('http'),
    url = require('url'),
    util = require('util'),
    querystring = require('querystring');

// External Node 'Batteries'
var nock = require('nock');

// Mock Server
var server = nock('http://not_real.com')
            .persist()
  
            .get('/customer_scoring/')
            .reply(200, {
              'propensity' : 0.26532,
              'ranking' : 'C'
            })
  
            .get('/old_customer_scoring/')
            .reply(302, 'Redirecting')
  
            .get('/forbidden/')
            .reply(403, 'Forbidden')
  
            .get('/')
            .reply(404, 'File Not Found');

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
        throw new Error('Path is required.')
    }

    if (!self.qs) {
        throw new Error('QueryString is required.');
    }
};

Api.prototype.buildUrl = function() {
    var self = this;
    var qs = querystring.stringify(self.qs);
    return url.resolve(self.url, self.path) + '?' + qs;
}

var endpoint = 'http://not_real.com';
var path = '/customer_scoring/';
var qs = {'income': 50000, 'zipcode': 60201, 'age': 35};

// DEBUG
var myApi = new Api(endpoint, path, qs);
console.log(myApi.url);
console.log(myApi.path);
console.log(myApi.qs);
console.log(myApi.buildUrl());

module.exports = Api; 

// exports.test_200 = function(test) {
//     http.get('http://not_real.com/customer_scoring/', function(res) {
//         var s = '';
//         res.on('data', function(data) {
//             s += data;
//         });
//         res.on('end', function() {
//             test.equals(res.statusCode, 200, '200 Result');
//             test.equals(
//                 s, 
//                 {'propensity' : 0.26532, 'ranking' : 'C'}, 
//                 '200 Result Content'
//             );
//             test.done();
//         });        
//     });
// };

// exports.test_302 = function(test) {
//     http.get('http://not_real.com/old_customer_scoring/', function(res) {
//         test.equals(res.statusCode, 302);
//         test.done();
//     });
// };

// exports.test_403 = function(test) {
//     http.get('http://not_real.com/forbidden/', function(res) {
//         test.equals(res.statusCode, 403, '403 Result');
//         test.done();
//     });
// };

// exports.test_404 = function(test) {
//     http.get('http://not_real.com/', function(res) {
//         test.equals(res.statusCode, 404, '404 Result');
//         test.done();
//     });
// };





