
// https://jestjs.io/docs/en/getting-started.html

const productOfAllElements = require('./productOfAllElements');

test('[1, 2, 3, 4, 5] should be [', () => {
    a = 1, 2, 3, 4, 5];
    b = 120, 60, 40, 30, 24];
    expect(productOfAllElements(a)).toBe(b);
});

// function testOne() {
//     a = [1, 2, 3, 4, 5]; 
//     b = [120, 60, 40, 30, 24]; 

//     try {
//         assert.deepEqual(productOfAllElements(a), b); 
//         console.log('Pass');
//     } catch (error) {
//         console.error('Failed');
//     }
// }

// function testTwo() {
//     a = [ 3, 2, 1 ];
//     b = [ 2, 3, 6 ];

//     try {
//         assert.deepEqual(productOfAllElements(a), b); 
//         console.log('Pass');
//     } catch (error) {
//         console.error('Failed');
//     }
// }