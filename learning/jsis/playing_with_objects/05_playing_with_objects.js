'use strict'

/*

You aren't going to understand Node if you don't understand objects. 

Similar to the idea of functions, there are two different ways to write objects.

1. Object Literal
2. Object Constructor

However, these patterns kind of suck for mass production of objects. So ... 
there are also two different kinds of ways to make objects. 

1. Constructor Pattern
2. Prototype Pattern

*/

// The constructor pattern is very similar to the way Python objects are
// created sans the dunder init.

function Robot (type, name, composition, color) {

    this.type = type;
    this.name = name;
    this.composition = composition;
    this.color = color;

    this.nameTag = function() {
        console.log('Hello, my name is ' + this.name);
    }
}

var droidOne = new Robot('Protocol Droid', 'C3PO', 'Aluminum', 'Gold');
var droidTwo = new Robot('Astromech Droid', 'R2D2', 'Carbon Steel', 'White');

droidOne.nameTag();
droidTwo.nameTag();

// There's also the prototype approch which looks something more like this. 

function OtherRobot () {

}

OtherRobot.prototype.type = 'Battle';
OtherRobot.prototype.name = 'MOO-9';
OtherRobot.prototype.composition = 'Brass';
OtherRobot.prototype.color = 'Beige';
OtherRobot.prototype.nameTag = function () {
    console.log('Hello, my name is ' + this.name);
}

var droidThree = new OtherRobot();
droidThree.nameTag();
