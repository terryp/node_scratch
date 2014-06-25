
'use strict';

var util = require('util');

/*

You aren't going to understand Node if you don't understand objects. 

Refresher course on accessing properties from an object.

*/

var car = {
    color: 'red',
    make: 'honda',
    model: 'civic',
    year: '1987'
}

// What if I didn't know what the properties of the object were? I think
// util comes in handy here.
console.log(util.inspect(car));

// Dot notation to access the values of properties.
console.log(car.color);

// Bracket notation to access the values of propeties.
console.log(car['year']);
