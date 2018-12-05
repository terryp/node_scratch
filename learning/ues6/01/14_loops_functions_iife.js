'use strict';

var funcs = [];

// For the record ... this kind of sucks. 
for(var i = 0; i < 10; i++) {
    funcs.push((function(value) {
        return function() {
            console.log(value);
        }
    }(i)));
}

funcs.forEach(function(func) {
    func();
});
