
'use strict';

/*

Make an HTTP server that outputs plain text with 100 new-line separated unix
timestamps every second.

*/

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    var left = 4;
    var interval = setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var stamp = Math.round(new Date() / 1000);
            res.write(JSON.stringify(stamp) + "\n");
        }
    }, 1000);
    
    if (--left === 0) {
        clearInterval(interval);
        res.write('Finished!');
        res.end();
    }

});

server.listen(4002);
