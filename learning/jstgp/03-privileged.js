
'use strict';

// Via Crockford
// http://javascript.crockford.com/private.html

function Container(param) {

    function dec() {
        if (secret > 0) {
            secret -= 1;
            return true;
        } else {
            return false;
        }
    }

    this.member = param;
    var secret = 3;
    var that = this;

    this.service = function() {
        return dec() ? that.member : null;
    }
}

var myContainer = new Container('abc')
console.log(myContainer.service());
console.log(myContainer.service());
console.log(myContainer.service());
console.log(myContainer.service());
