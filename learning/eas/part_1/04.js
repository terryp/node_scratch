/*jslint node: true */

'use strict';

function logItem(item) {
    console.log(item);
}

function asyncEach(arr, callback) {
    function makeCallbackWrapper(arr, i, callback) {
        return function() {
            callback(arr[i]);
        }
    }

    for (var i = 0; i < arr.length; i++) {
        setTimeout(makeCallbackWrapper(arr, i, callback), 0);
    }
}

console.log('Begin');
asyncEach([1,2,3], logItem);
console.log('End');
