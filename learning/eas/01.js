/*jslint node: true */

'use strict';

function logItem(item) {
    console.log(item);
}

function each(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}   

console.log('Begin');
each([1,2,3], logItem);
console.log('End');
