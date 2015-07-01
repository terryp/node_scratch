/*jslint node: true */

'use strict';

// Node 'Batteries Included'
var http = require('http'),
    url = require('url'),
    util = require('util'),
    querystring = require('querystring');

// Local Node 'Batteries'
var Api = require('./api.js');

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

// Ahoy, unit tests!
exports.testParams = function (test) {
    var target = 'http://foo.com';
    var path = '/foo/';
    var qs = {'baz' : 'bat'};

    var myApi = new Api(target, path, qs);
    test.equals(myApi.url, 'http://foo.com', 'URL Property');
    test.equals(myApi.path, '/foo/', 'Path Property');
    test.deepEqual(myApi.qs, {'baz' : 'bat'});
    test.done();
};

exports.testParamsErr = function (test) {
    test.throws(
        function() {
            var target = '';
            var path = 'foo';
            var qs = {'baz' : 'bat'};
            new Api(target, path, qs);
        }, Error, 'Error: URL is required.');

    test.throws(
        function() {
            var target = 'http://foo.com';
            var path = '';
            var qs = {'baz' : 'bat'};
            new Api(target, path, qs);
        }, Error, 'Error: Path is required.');

    test.throws(
        function() {
            var target = 'http://foo.com';
            var path = 'foo';
            var qs = '';
            new Api(target, path, qs);
        }, Error, 'QueryString is required.');

    test.done();
};

exports.testUrlBuild = function(test) {
    var target = 'http://foo.com';
    var path = '/foo/';
    var qs = {'baz' : 'bat'};

    var myApi = new Api(target, path, qs);
    var myUrl = myApi.buildUrl();

    test.equals(myUrl, 'http://foo.com/foo/?baz=bat')
    test.done();
}

// Close the mock server
server.isDone();
