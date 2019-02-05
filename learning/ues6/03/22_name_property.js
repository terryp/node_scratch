
var doSomething = function doSomethingElse() {
    // empty
}

var person = {
    get firstName() {
        return "Terry";
    },
    sayName: function() {
        console.log(this.name);
    }
}

console.log(doSomething.name);
console.log(person.sayName.name);
console.log(person.firstName.name);
