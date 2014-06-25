
'use strict';

/*

You aren't going to understand Node if you don't understand objects. 

Enumerating properties of objects.

*/

var car = {
    color: 'red',
    make: 'chevy',
    model: 'corvette',
    year: '1984'
}

for (var property in car) {
    console.log(property);
}
