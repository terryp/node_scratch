
function add(first, second = first) {
    return first + second;
}

console.log(add(1, 1));         // 2
console.log(add(1));            // 2
