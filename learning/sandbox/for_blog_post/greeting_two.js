// Defining the function
var greeting_two = new Function(
    "string", 
    "console.log('Hello ' + string + '!')"
);

// Calling the function
greeting_two("World");
