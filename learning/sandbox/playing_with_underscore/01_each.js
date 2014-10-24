/*jslint node: true */

'use strict';

var _ = require('underscore');

var people = ['Tom', 'Dick', 'Harry'];

/* 

    This is more of less, iteration. 
    
*/ 

_.each(people, function(p) {
    console.log(p.toLowerCase());
});

/* 

    And this is kind of a long way of using each instead of using map.

*/

var lowerPeople = [];

_.each(people, function(p) {
    lowerPeople.push(p.toLowerCase());
})

console.log(lowerPeople);
