
// ECMAScript 5 way of putting a method in an object literal. 
// Note that there's a sayName property that has the value of 
// an anonymous function. 

var person = {
    name: "Nicholas", 
    sayName: function() {
        console.log(this.name);
    }
};

person.sayName();
