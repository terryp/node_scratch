
let evens = [];
let odds = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}

console.log(evens);
console.log(odds);