/*jslint node: true */

'use strict';

var _ = require('underscore');

var people = ['Tom', 'Dick', 'Harry'];

var lowerPeople = _.map(people, function(p) {
    return p.toLowerCase();
})

console.log(lowerPeople);
