
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
        for (var i = 0x; i < 100; i++) {
            var stamp = Math.round(new Date() / 1000);
            res.write(JSON.stringify(stamp) + "\n");
        }
    }, 1000);
    
    // I'll be honest, I don't really get this decrement pattern.
    // On top of that, this works in Firefox but doesn't work in Chrome. 
    // I guess add to the list I dont' get res.write() that much, either - 
    // maybe just in the Chrome abberant behavior use case.
    //
    // Maybe. 

    if (--left === 0) {
        clearInterval(interval);
        res.write('Finished!');
        res.end();
    }

});

server.listen(4002);
