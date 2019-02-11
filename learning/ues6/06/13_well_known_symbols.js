
function SpecialNumber() {
    // empty
}

Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
    value: function(v) {
        return (v instanceof Number) && (v >=1 && v <= 100); 
    }
});

var two = new Number(2), 
    zero = new Number(0);

console.log(two instanceof SpecialNumber);
console.log(zero instanceof SpecialNumber);

