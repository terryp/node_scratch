
'use strict';

var net = require('net');

net.createServer(function(socket) {
    socket.on('data', function(data) {
        // Got Data
    });

    socket.on('end', function(data) {
        // Close Connection
    });

    socket.write('Some string');
}).listen(2001);
