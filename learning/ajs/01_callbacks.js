/*jslint node: true */

'use strict';

function finder(records, cb) {
    setTimeout(function () {
        records.push(3, 4);
        cb(records);
    }, 1000);
}

function onFinderDone(records) {
    processor(records, onProcessorDone);
}

function processor(records, cb) {
    setTimeout(function () {
        records.push(5, 6);
        cb(records);
    }, 1000);
}

function onProcessorDone(records) {
    console.log(records);
}

finder([1,2], onFinderDone);
