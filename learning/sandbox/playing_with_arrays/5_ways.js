
/*jslint node: true */

'use strict';

//  Five Array Methods You Shoud Be Using, Right Now
//  http://colintoh.com/blog/5-array-methods-that-you-should-use-today

// Convenience

var splitter = function() {
    console.log("\n-----------\n");
};

//  1 - indexOf()
//
//  http://devdocs.io/javascript/global_objects/array/indexof
//
//  The indexOf() method returns the first index at which a given element can 
//  be found in the array, or -1 if it is not present.

var firstWay = function() {
    console.log('1 - indexOf\n');
    var arr = ['apple', 'orange', 'pear'];
    var i = arr.indexOf('orange');
    console.log('Found: ', arr.indexOf('orange') != -1);
    console.log('Found: ', arr[i]);
};

//  2 - filter()
//
//  http://devdocs.io/javascript/global_objects/array/filter
//
//  The filter() method creates a new array with all elements that pass the 
//  test implemented by the provided function.

var secondWay = function() {
    console.log('2 - filter\n');
    var arr = [
        {'name' : 'apple', 'count' : 2},
        {'name' : 'orange', 'count' : 5},
        {'name' : 'pear', 'count' : 3},
        {'name' : 'orange', 'count' : 16},
    ];
    var results = arr.filter(function(item) {
        return item.name === 'orange';
    });
    console.log(results);
};

//  3 - forEach()
//
//  http://devdocs.io/javascript/global_objects/array/foreach
//
//  The forEach() method executes a provided function once per array element.

var thirdWay = function() {
    console.log('3 - forEach\n');
    var arr = ['apple', 'orange', 'pear', 23, 438, 'foo'];
    arr.forEach(function(item, index) {
        console.log(item);
    });
};


firstWay();
splitter();
secondWay();
splitter();
thirdWay();
