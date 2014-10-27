/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

console.log('Item 62: Use Nested of Named Callbacks for Asynchronous Sequencing.\n');

var file = path.resolve('../../data', 'lebowski.txt');
