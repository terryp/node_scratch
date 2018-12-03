
'use strict';

var assert = require('assert');

var something = [2, 4, 6, 8];

for (var i = 0; i < something.length; i++ ) {
    console.log(something[i]);
    (function(ind){ console.log(ind)}(i));
}

// FIXME: Manderson owes me a better example of IFFE. Also see
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/
