
'use strict';

var assert = require('assert');

var item = 'test';

var itemRef = item;

item += 'ing';

console.log(item);

assert.notEqual(item, itemRef);
