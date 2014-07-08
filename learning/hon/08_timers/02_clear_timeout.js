
'use strict';

var timeoutHandle = setTimeout(function() { 
    console.log('YES!')
}, 1000);

clearTimeout(timeoutHandle);
