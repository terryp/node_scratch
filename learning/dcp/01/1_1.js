/*

Get Product of All Other Elements

Given an array of integers, return a new array such that each element at index i of the new array is a prodyuct of all the numbers in the original array except the one at i. 

For example, if our input was [1, 2, 3, 4, 5] the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1] the expected output would be [2, 3, 6].

*/ 

const assert = require('assert');

function productOfAllElements(input) {
    let output = [];
    input.forEach(function(value, index) {
        let before = [];
        let after = [];
        before = input.slice(0, index);
        after = input.slice(index + 1, index.length);
        let total = before.concat(after);
        output.push(total.reduce((a, b) => a * b));
    });    
    return output;
}

function testOne() {
    a = [1, 2, 3, 4, 5]; 
    b = [120, 60, 40, 30, 24]; 

    try {
        assert.deepEqual(productOfAllElements(a), b); 
        console.log('Pass');
    } catch (error) {
        console.error('Failed');
    }
}

function testTwo() {
    a = [ 3, 2, 1 ];
    b = [ 2, 3, 6 ];

    try {
        assert.deepEqual(productOfAllElements(a), b); 
        console.log('Pass');
    } catch (error) {
        console.error('Failed');
    }
}

testOne();
testTwo();
