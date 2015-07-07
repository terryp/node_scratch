/*jslint node: true */

'use strict';

// Local Node 'Batteries'
var Api = require('./api.js');

// External Node 'Batteries'
var nock = require('nock');

// Mock Server
var server = nock('http://not_real.com')
            .persist()
  
            // Author Note: This is way broken in nock right now
            // see -- 
            // 
            // https://github.com/pgte/nock/issues/82
            // 
            // best thing I can do is hardcode, which is lamers
            .get('/customer_scoring/?income=50000&zipcode=60201&age=35')
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

//
// testParams = validate that when I try to make an API object, I've done it
// with the right params. 
//
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

//
// testParamsErr = validate that if I don't supply the right params, I throw 
// some errors. 
//
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

//
// testURLBuild = validate that the API object actually builds an endpoint
// correctly. 
//
exports.testUrlBuild = function(test) {
    var target = 'http://foo.com';
    var path = '/foo/';
    var qs = {'baz' : 'bat'};

    var myApi = new Api(target, path, qs);
    var myUrl = myApi.buildUrl();

    test.equals(myUrl, 'http://foo.com/foo/?baz=bat');
    test.done();
};

// 
// testFetch = validate that when I ask for something, I actually get something 
// back. 
//
exports.testFetchData = function(test) {
    var target = 'http://not_real.com';
    var path = '/customer_scoring/';
    var qs = {'income': 50000, 'zipcode': 60201, 'age': 35};

    var myApi = new Api(target, path, qs);
    myApi.fetchData(function(results) {
        var myResults = results;
        test.equals(myResults['status code'], 200, 'Status Code');
        test.done();
    });
};

// Close the mock server
server.isDone();
