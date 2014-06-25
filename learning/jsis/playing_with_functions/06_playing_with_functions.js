
'use strict'

// Here I'm declaring a function. It accepts two parameters, a string and a 
// callback function. The Callback is executed last. 
function greeting(string, callback) {
    console.log('Hi, I am a function.');
    console.log('I accept two arguments:');
    console.log('1. A string');
    console.log('2. A callback');
    console.log('Here is the string I was passed: ' + string);
    console.log('Now, I will execute the callback!');
    callback(string)
}


// Here, I'm invoking the declared function and passing it a string as well as 
// an anonymous function as the callback parameter. 
greeting('PASSED IN ARGUMENT', function(string) {
    console.log('------------------------------------------------------------');
    console.log('\tLadies and gentlemen, now we are in the callback!');
    console.log('\tSince functions are first class citizens, they can');
    console.log('\tbe passed into a function as an argument. In this case,');
    console.log('\twe are passing in a anonymous function that is printing');
    console.log('\tall of this verbose information. But what is this good');
    console.log('\tfor? What else can I do ... what do I have access too?');
    console.log('\tWell, since I am inside the scope of the function, I have');
    console.log('\taccess to the variables in it - so in this case the');
    console.log('\tstring argument. I will make it from CAPS to lowercase');
    console.log('\n');
    console.log('\tOriginal string: ' + string);
    console.log('\tNew string: ' + string.toLowerCase());
    console.log('------------------------------------------------------------');
});

console.log('\nWait ... do I need to pass in ONLY an anonymous function?')
console.log('Could I do the same thing with a named function?');

// Here I'm declaring a function and giving it a name. 
var not_an_anonymous_callback = function (string) {
    console.log('\tOriginal string: ' + string);
    console.log('\tNew string: ' + string.toLowerCase());
}

// Here I'm invoking the first function but passing it a named function
// as the callback instead of an anonymous one.
greeting('HERE IS A DIFFERENT ARGUMENT', not_an_anonymous_callback);
