
// app/index.js
// 
// The "real" face of the application, which uses readline. 

const readline = require('readline');
const add = require('./add.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input two numbers, separated by a space: ', (userInput) => {
    const result = add.add(userInput);
    console.log(`Here\'s the sum of your input: ${result}`);
})
