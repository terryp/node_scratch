
'use strict';

var assert = require('assert');

var items = new Array('one', 'two', 'three');

var itemsRef = items;

items.push('four');

console.log(items);

assert(items.length == itemsRef.length, "Length of object and reference match");
