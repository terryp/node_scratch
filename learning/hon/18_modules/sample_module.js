
'use strict';

var counter = 0;

var onePrivateMethod = function() {
    return counter;
};

var onePublicMethod = function() {
    onePrivateMethod();
    return ('You already called this module %d times', counter);
};

module.exports = onePublicMethod;
