/*jslint node: true */

'use strict';

function logItem(item) {
    console.log(item);
}

function asyncEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var boundCallback = callback.bind(null, arr[i]);
        setTimeout(boundCallback, 0);
    }
}

console.log('Begin');
asyncEach([1,2,3], logItem);
console.log('End');
