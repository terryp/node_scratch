
function mixArgs(first, second = "b") {
    console.log(arguments.length);                  // 1
    console.log(first === arguments[0]);            // true
    console.log(second === arguments[1]);           // false
    first = "c";
    second = "d";
    console.log(first === arguments[0]);            // false
    console.log(second === arguments[1]);           // false
}

mixArgs("a");
