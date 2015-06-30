/*jslint node: true */

'use strict';

var http = require('http'), 
    path = require('path'), 
    url = require('url');

var request = require('request');

var testServer = http.createServer(function(req, res) {
    var uri = url.parse(req.url, true).pathname;
    var query = url.parse(req.url, true);
    var filename = path.join(process.cwd(), 'static', uri);

    //DEBUG
    console.info('INFO - uri: ', uri);
    console.info('INFO - querystring: ', query.query);
    console.info('INFO - path or filename: ', filename);
    console.info('--------- ');

    if (uri === '/customer_scoring' && query) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('200: Success\n');
        var payload = { 'propensity' : 0.26532, 'ranking' : 'C'};
        res.write(JSON.stringify(payload));
        res.end();
        return;
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404: File Not Found\n');
        res.end();
        return;
    }
    

});

testServer.listen(3000);


// module.exports = {
//     'Test 1' : function(test) {
//         test.expect(1);
//         test.ok(true, 'This should pass');
//         test.done();
//     }
// };
