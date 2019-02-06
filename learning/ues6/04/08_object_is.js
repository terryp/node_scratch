
console.log("+0 == -0", +0 == -0);                          // true
console.log("+0 === -0", +0 === -0);                        // true
console.log("Object.is(+0, -0)", Object.is(+0, -0));        // false

console.log("NaN == NaN", NaN == NaN);                      // false
console.log("NaN === NaN", NaN === NaN);                    // true
console.log("Object.is(NaN, NaN)", Object.is(NaN, NaN));    // true

console.log("5 == 5", 5 == 5);                              // true
console.log("5 == \"5\"", 5 == "5")                         // true
console.log("5 === 5", 5 === 5)                             // true
console.log("5 === \"5\"", 5 === "5")                       // false
console.log("Object.is(5, 5)", Object.is(5, 5));            // true
console.log("Object.is(5, \"5\")", Object.is(5, "5"));      // false
