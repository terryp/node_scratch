
function Person(name) {
    if(this instanceof Person) {
        this.name = name;
    } else {
        throw new Error("You must use new with Person.");
    }
}

var person = new Person("Terry");
var notAPerson = Person("Terry");
