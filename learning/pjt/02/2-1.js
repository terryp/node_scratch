
'use strict';

var assert = require('assert');

var obj = new Object();

var objRef = obj;

obj.someProperty = true;

assert(obj === objRef);
