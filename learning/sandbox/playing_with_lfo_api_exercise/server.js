/*jslint node: true */

'use strict';

var http = require('http');

var nock = require('nock');

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



exports.test_200 = function(test) {
    http.get('http://not_real.com/customer_scoring/', function(res) {
        var s = '';
        res.on('data', function(data) {
            s += data;
        });
        res.on('end', function() {
            test.equals(res.statusCode, 200, '200 Result');
            test.equals(
                s, 
                {'propensity' : 0.26532, 'ranking' : 'C'}, 
                '200 Result Content'
            );
            test.done();
        });        
    });
};

exports.test_302 = function(test) {
    http.get('http://not_real.com/old_customer_scoring/', function(res) {
        test.equals(res.statusCode, 302);
        test.done();
    });
};

exports.test_403 = function(test) {
    http.get('http://not_real.com/forbidden/', function(res) {
        test.equals(res.statusCode, 403, '403 Result');
        test.done();
    });
};

exports.test_404 = function(test) {
    http.get('http://not_real.com/', function(res) {
        test.equals(res.statusCode, 404, '404 Result');
        test.done();
    });
};



server.isDone();

// var http = require('http'), 
//     path = require('path'), 
//     url = require('url');

// var server; 

// exports.start = function(port, callback) {
//     server = http.createServer();
//     server.on('request', function(req, res) {
//         res.writeHead(200);
//         res.write('200: Success\n');
//         res.end();
//     });
// };

// exports.stop = function(callback) {
//     server.close(callback);
// }

// var firstServer = http.createServer(function(req, res) {
//     var uri = url.parse(req.url, true).pathname;
//     var query = url.parse(req.url, true);
//     var filename = path.join(process.cwd(), 'static', uri);

//     //DEBUG
//     console.info('INFO - uri: ', uri);
//     console.info('INFO - querystring: ', query.query);
//     console.info('INFO - path or filename: ', filename);
//     console.info('--------- ');

//     if (uri === '/customer_scoring' && query) {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write('200: Success\n');
//         var payload = { 'propensity' : 0.26532, 'ranking' : 'C'};
//         res.write(JSON.stringify(payload));
//         res.end();
//         return;
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('404: File Not Found\n');
//         res.end();
//         return;
//     }
// });



// YAKS!

// var server = http.createServer();

// exports.start = function(port, callback) {
//     if (!port) {
//         throw new Error('ERROR: Port is required');
//     }

//     server.on('request', function(req, res) {
//         //DEBUG
//         console.info('INFO - uri: ', uri);
//         console.info('INFO - querystring: ', query.query);
//         console.info('INFO - path or filename: ', filename);
//         console.info('--------- ');

//         if (uri === '/customer_scoring' && query) {
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.write('200: Success\n');
//             var payload = { 'propensity' : 0.26532, 'ranking' : 'C'};
//             res.write(JSON.stringify(payload));
//             res.end();
//             return;
//         } else {
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.write('404: File Not Found\n');
//             res.end();
//             return;
//         }        
//     })

//     server.listen(port);

//     if (callback) {
//         callback();
//     }
// };

// exports.stop = function(callback) {
//     server.close(callback);
// }

