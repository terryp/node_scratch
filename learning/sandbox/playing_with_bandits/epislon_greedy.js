/*jslint node: true */

var colorOne = 'green';
var colorTwo = 'blue';

var colors = [colorOne, colorTwo];

function getRandom() {
    var random = Math.floor(Math.random() * colors.length);
    return random;
}

var color = colors[getRandom()];

console.log(color);
