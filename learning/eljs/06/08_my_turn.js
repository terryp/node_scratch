class Person {
  constructor(name, age, family) {
    (this.name = name), (this.age = age), (this.family = family);
  }
}

let me = new Person('Terry', 44, ['Laura', 'Ian', 'Owen']);

console.log(me.name);
console.log(me.age);
console.log(me.family);
