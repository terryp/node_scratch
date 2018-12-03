
var increase = (function() {
    var counter = 0;
    return function() {
        return counter += 1;    
    }
console.log(counter);
})();

increase();
increase();
increase();
