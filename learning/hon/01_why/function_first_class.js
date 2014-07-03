
'use strict';

var scheduler = function(timeout, callback) {
    return function() {
        setTimeout(callback, timeout);
    }
}

(function() {
    var timeout = 1000;
    var count = 0;
    var schedule = scheduler(timeout, function doSomething() {
        console.log(count++);
        schedule();
    });
    schedule()
})();
