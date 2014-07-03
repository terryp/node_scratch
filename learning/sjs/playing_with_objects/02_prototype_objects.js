
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    describe: function() {
        return 'Hi my name is ' + this.name + '!';
    },
}

var me = new Person('Terry', 39);
console.log(me.describe());

var you = new Person('Ian', 7);
console.log(me.describe());
