const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World!');
  })
  .listen(8675);

console.log('Running on :8675');
