/*jslint node: true */

'use strict';

var a = 'Foo';
var b = 'Foo';
var c = 'Bar';

console.assert((a === b), 'These do not match!');

console.assert((a === c), 'These do not match!');
