
'use strict';

var assert = require('assert');

var items = new Array('one', 'two', 'three');

var itemsRef = items;

items = new Array('new', 'array');

assert.notEqual(items, itemsRef);
