/*jslint node: true */

'use strict';

// PSEUDO CODE-Y #1
// Welcome to callback hell

listen('click', function handler(evt) {                         // NOW
    setTimeout(function request() {                             // LATER
        ajax('http://www.foo.com', function response(text) {    // LATER LATER
            if (text == 'hello') {                              // MOST LATER
                handler();
            } 
            else if (text == 'world') {
                request();
            }
        })
    }, 500);
})

// PSEUDO CODE-Y #2
// This is the order of operations, assuming the internal function calls in 
// doA() are async. 
//
// doA();
// doF();
// doB();
// doC();
// doE();
// doD();

doA(function() {
    doB();

    doC(function() {
        doD();
    });

    doE();
});

doF();

// PSEUDO CODE-Y #1
// This time let's whack the nesting!

listen('click', handler);

function handler() {
    setTimeout(request, 500);
}

function request() {
    ajax('http://www.food.com')
}

function response(text) {
    if (text == 'hello') {
        handler();
    } 
    else if (text == 'world') {
        request();
    }
}
