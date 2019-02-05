
function getValue(value) {
    return value + 5; 
}

function add(first = second, second) {
    return first + second; 
}

console.log(add(1, 1));         // 2
console.log(add(undefined, 1));            // 7
