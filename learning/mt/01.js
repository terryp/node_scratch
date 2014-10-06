
/*jslint node: true */

'use strict';

/*

    While I could care JavaScript in the browser, I don't for this set of
    exercises. I'm more focused on what's happening through the lends of Node.

    In this case - har, har - this can have two outcomes depending on whether
    or not 'strict' mode is enabled. 

    If not using 'use strict'   then 'this' ==      the global object
    If using 'use strict'       then 'this' ==      undefined

*/

function doStuff() {
    console.log('I am doing things.');
    console.log(this);
}

doStuff();

