
function Person(name) {
    if(typeof new.target !== "undefined") {
        this.name = name;
    } else {
        throw new Error("You must use new with Person.");
    }
}

var person = new Person("Terry");
var notAPerson = Person("Terry");
