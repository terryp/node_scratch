const http = require('http');

const server = http.createServer(function(req, res) {
  Object.keys(req.headers).forEach(key => {
    res.write(`key : ${req.headers[key]}`);
  });
  res.end();
});

server.listen(8675);
