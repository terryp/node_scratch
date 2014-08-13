/*jslint node: true */

'use strict';

var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            this.clients[id].write(message);
        }
    }
    this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function(client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    console.log('A new connection was made: ', id);

    /* 

    Some errata in here. Found the following:
    
    - http://www.manning-sandbox.com/thread.jspa?threadID=58291&tstart=30
    - http://stackoverflow.com/questions/16903844/node-js-net-events-dont-fire

    Here is the original code:

    client.on('connect', function() {
        channel.emit('join', id, client);
    });

    Somehow embedding the channel.emit event in the client.on event causes
    the program not to work. The StackOverflow article points to the fact that
    once you create a new server an implicit connection event is already sent
    along ... so the extra one with the embedded join event doesn't work. 
    Yanking the channel.emit('join') out of the client.on('connect'...)
    addresses the problem - but I'll be honest, I don't get it. 

    */

    channel.emit('join', id, client);

    client.on('data', function(data) {
        data = data.toString();
        channel.emit('broadcast', id, data);
    });
});

server.listen(8888);
