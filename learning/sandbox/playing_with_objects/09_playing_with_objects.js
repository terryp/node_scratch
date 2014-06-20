
'use strict';

/*

You aren't going to understand Node if you don't understand objects. 

A little more enumeration ... with Prototypes.

*/

var car = {
    color: 'red',
    make: 'chevy',
    model: 'corvette',
    year: '1984'
}

function SportsCar() {
    this.gasType =  'Super High Octane';
}

var car = new SportsCar()
car.color = "Black";
car.make = "Honda";
car.model = "F1";
car.year = "2014";

for (var property in car) {
    console.log(property);
}
