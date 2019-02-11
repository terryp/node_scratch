
function MyObject() {
    // empty
}

Object.defineProperty(MyObject, Symbol.hasInstance, {
    value: function(v) {
        return false;
    }
});

let obj = new MyObject()

console.log(obj instanceof MyObject);       // false