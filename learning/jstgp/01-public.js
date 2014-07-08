
'use strict';

// Via Crockford
// http://javascript.crockford.com/private.html

function Container(param) {
    this.param = param;
}

Container.prototype.stamp = function(string) {
    return this.param + string;
}

var myContainer = new Container('abc');
console.log(myContainer.param);
console.log(myContainer.stamp('def'));
