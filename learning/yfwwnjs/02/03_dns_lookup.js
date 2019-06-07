const dns = require('dns');

dns.lookup('bing.com', function(err, address, family) {
  console.log(`Address: ${address} Family: ${family} Error: ${err}`);
});
