/*jslint node: true */

'use strict';

var _ = require('underscore');

var people = ['Tom', 'Dick', 'Harry'];

var sentence = _.reduce(people, function(str, p) {
    var li = 'I like ' + p + '. ';
    return str + li;
}, '');

console.log(sentence);
