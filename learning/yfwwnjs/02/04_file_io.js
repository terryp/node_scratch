var fs = require('fs');

// Writing
// fs.writeFile('message.txt', 'Hello Node!', function() {
//   console.log('Saved.');
// });

// console.log('Writing file.');

// Reading
fs.readFile('./message.txt', function(err, data) {
  console.log(data);
});
