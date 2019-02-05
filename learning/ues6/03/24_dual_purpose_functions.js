
function Person(name) {
    this.name = name;
}

var person = new Person("Terry");
var notAPerson = Person("Terry");

console.log(person);
console.log(notAPerson);
