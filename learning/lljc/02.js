
function sayHello() {
    var say = function() { console.log(hello); }

    // Local variable that ends up in the closure.
    var hello = 'Hello, world!';
    
    return say;
}

var sayHelloClosure = sayHello();

// 'Hello, world!'
sayHelloClosure(); 
