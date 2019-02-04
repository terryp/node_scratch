
let value = 5; 

function getValue() {
    return value++;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1,1));          // 2
console.log(add(1));            // 6
console.log(add(1));            // 7
