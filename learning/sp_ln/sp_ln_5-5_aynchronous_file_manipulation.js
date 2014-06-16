
/*

This is unoriginal thought. Basically, I'm working through some execises in 
Shelly Powers' 'Leaning Node' book - specically Chapter 5 / Control Flow.

*/

var fs = require('fs');
var util = require('util');

var writeStream = fs.createWriteStream('./logs/log.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0666});

try {
   // get list of files
   fs.readdir('./data/', function(err, files) {

      // for each file
      files.forEach(function(name) {

         // modify contents
         fs.readFile('./data/' + name,'utf8', function(err,data) {

            if (err) throw err;
            var adjData = data.replace(/somecompany\.com/g,'burningbird.net');

            // write to file
            fs.writeFile('./data/' + name, adjData, function(err) {

               if (err) throw err;

               // log write
               writeStream.write('changed ' + name + '\n', 'utf8', function(err) {

                  if(err) throw err;
               });
            });
         });
      });
   });
} catch(err) {
  console.error(util.inspect(err));
}
