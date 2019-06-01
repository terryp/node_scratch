let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62
};

console.log(`Julia is ${ages['Julia']}`);
console.log("Is Jack's age known", 'Jack' in ages);
console.log("Is toString's age known", 'toString' in ages);
