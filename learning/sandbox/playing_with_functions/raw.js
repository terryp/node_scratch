
/* 
 Hello
Problem: I don't understand callbacks in JavaScript. And no matter how much Googling I've done and Stack Overflow research I've done - I'm still at a relative loss of understanding why I would want to use callbacks
and how they really work. 

Context: I don't really code that much. I'm a technology manager who used to code. And if that weren't bad enough, I've also avoided learning JavaScript for almost 15 solid years. Oh, I've bought the books. Yeah, I have Node.js installed on my machine. And yeah, I even thought CoffeeScript might be a solid way of avoiding learning about JavaScript. What I've found is that none of those things has helped me understand the notions of callbacks beyond having "faith." And since programming isn't a religious activity, I need some evidence. What lies before you is a Lester Bangs meets David Foster Wallace exploration of JavaScript callbacks from the bottom up. 

*/

console.log("\n");
console.log("Step 1. Understanding functions.");
console.log("------------------")

/* 

Before we can start understanding callbacks, we have to really drill down into the notion of functions. Callbacks happen in the context of functions - so if we don't understand functions we're not going to have a solid way of understanding callbacks. 

Here's my take on functions: 
    - A function is a reusable piece of code with the following notion
    - Needs to be defined by the keyword "function."
    - Can optionally have a name - yeah this is weird, you can have
      a function that doesn't have a name it just does stuff. 
    - Can optionally have arguments. Collected in parentheses.
    - Is bounded by curly braces as the delimiters of it's scope. 
    - Has some kind of code that works in the middle. 

Functions are really the gateway drug of programming. Most programming tutorials teach you about functions, but functions allow you to organize and reuse pieces of code in ways that make your programs readable, sustainable, testable and just good. 

So let's write a basic function. We'll call it "greeting" and we'll do the whole "Hello World!" thing. 

*/

function greeting_one(string) {
    console.log("Hello " + string + "!");
}

/*

So here's a basic function. 
    - It's called "greeting."
    - It requires a single argument called "string."
    - It has some curly braces. 
    - The code in the middle takes the string and creates a greeting string
      "Hello [ARG]!"

Now we've defined a function. It's just sitting there in the code. If you want the function to do something, you actually need to call it. To call a function you simply write it's name and then add some parentheses. Like this. 

*/

greeting_one();

/* 

This won't work though. When you run it you get the output:
    
    Hello undefined!

OK, it kind of worked, we didn't get a traceback but if you recall our function requires a string. In the example above, we didn't pass in a string, so the code executes but returns "undefined." So let's pass in a variable. 

*/ 

greeting_one("World");

/* 

Now we get the output that we were thinking that we would get:

     Hello World!

So what about this notion of functions having optional names. 
How does that work? We could write the same exact "greeting" function but
not call it anything. 

*/ 

console.log("\n");
console.log("Step 2. Defining functions.");
console.log("------------------")

/* 

As a Pythonista, I take for granted the fact that there's basically only one way to define a function in Python (OK, really there's 2 but that deals with lambda functions which we might touch on later). In Python, defining a function is done like this:

     >>> def greeting(string):
     ...     print "Hello %s!" % string
     ...
     >>> greeting("World")
     Hello World!

JavaScript provides three different ways for programmers to define a function. 
    1. Using the function constructor
    2. Using function declaration
    3. Creating a function expression

Let's examine each one. Slightly more indepth. We'll start with using the _function constructor_.

Using the _function constructor_ is syntax similar to how you create new objects in JavaScript - maybe more on objects in the next session.  To use a function constructor you do it by using the keyword "new" followed by the keyword "Function" which is a reference to the base object of a JavaScript function. 

Here's the same function that we wrote earlier but done in the _function constructor_ style.

*/ 

var greeting_two = new Function("string", "console.log('Hello ' + string + '!')");

/*

Right off the bat, you'll see a lot of differences. 
    - No curly braces. 
    - We're assigning the function to a variable. 
    - The execution of the program is actually an argument passed to the 
      Function object constructor. 

Again, we've just defined the function. If we want it to work we need to call it. 

*/ 

greeting_two("World");

/*

Just like the first time we wrote this function, we get the same kind of output as before. 

        Hello World!

So while we wrote the function differently, the output was the same as before. 

OK, so that's the _function constructor_ way of defining a function. Let's tackle _function declaration_ next. 

Using _function declaration_ is basically what we did in the opening example in part one. This is how most programmers - OK, this is how I think about defining functions and it's the way I've done it in Perl, PHP, Ruby and Python.

*/

function greeting_three(string) {
    console.log("Hello " + string + "!");
}

/*

Declaration means that we're creating a function and giving it a name. We have arguments in parentheses and we have code execution between the curly braces. As I mentioned already - which people are sick of - is that we've only defined the function. We still need to call it!

*/ 

greeting_three("World");

/*

Voila! We have our compelling output:

    Hello World!

Trust me, I understand how pedantic and boring this is. I'm the author who's just written some form of hello world a bunch of times. I swear this is going somewhere. I hope. 

OK, the last way of writing a function in JavaScript is using a _function expression_. Here's the same greeting function using the _function expression_ way. 

*/

var greeting_four = function (string) { console.log("Hello " + string + "!"); }

greeting_four("World");

/*

Wait a second, you just removed white space!

Kind of. Kind of. The important element here is that JavaScript allows you to make function names optional when used in the context of _function expressions_. Optional is really optional so we could write the same function as:

*/ 

var greeting_five = function hello(string) { console.log("Hello " + string + "!"); }

greeting_five("World");

/* 

There's a catch here - and it involves scope. We've defined the function hello in an inner scope. So an outer scope can't call it. So if we try to call hello(); we're going to come up undefined. IT'll look something like this:

        hello();
        ^
        ReferenceError: hello is not defined

The outer scope can't see the hello() function. 

*/

console.log("\n");
console.log("Intermission / We're Talking About Callbacks Right?");
console.log("------------------")

/*

So why exactly have we done all this, I though you were going to talk about callbacks and all you done is talk about functions?

This is an excellent question. As I understand callbacks, there's some syntactical stangeness that's important to understand and if you don't understand the basic notion and rules of functions some of the more salient ideas of callbacks might be lost. 

Here's what I think a callback looks like. 

*/ 

function function_with_a_callback(string, callback) {
    console.log("< cue music >")
    console.log("I'm a little function.");
    console.log("Here's my string: " + string);
    console.log("< /cue music >");
    callback();
}

/*

Here we've defined a function using the _function declaration_ method. Our function is named "function_with_a_callback." This function takes two arguments, the first one is a string and the second one is a callback. 

Now remember, I've been saying over and over again (besides saying "Hello World!") that we've only defined a function, we haven't called it. So if we were to call it *knowing* that the second argument is a function it would look something like this:

*/ 

function_with_a_callback("Some String", function() {
    console.log("Hello, I'm the callback!");
    console.log("Mind blown!");
});

/*

Right here is where - personally - my head gets a little blown up. Before we run away and check Hacker News for new stories, let's retreat to the function exploration we just did.

    1. We created a function named "function_with_a_callback" using the 
       _function declaration_ method. 
    2. We called that function and passed in two arguments, just like 
       the function expects!
    3. However, the second argument is a anonymous function that we
       created using the _function expression_ method. 

So what's the output! And let's break it down a little more. 

    < cue music >                   <- This is the output from our function
    I'm a little function.
    Here's my string: Some String
    < /cue music >
    Hello, I'm the callback!        <- Here's the output from the anonymous
    Mind blown!                        function, we passed in as an argument.

We did make a little leap though. So we need to step back a little and talk about functions a little more. 

*/

console.log("\n");
console.log("Step 3. Functions are first class citizens.");
console.log("------------------")

/*

You hear and read a lot of people say, "Functions are first class citizens!"
What does that mean? Per Crockford in "JavaScript: The Good Parts" he 
effectively summarizes it by saying that:

     Functions are objects. 
     ...
     Since functions are objects, they can be used like any other value. 
     Functions can be stored in variables, objects and arrays.

Let's try that.

*/

var a_variable_storing_a_function = function() {
    console.log("Guess what? I'm a function in here.")
}

a_variable_storing_a_function();

/* 

These are super long variable names, but I'm trying to make the code examples as semantic as possible. I'm not going for style points and even if I were, stylistically as a programmer I'm pretty lame. 

In the above example, I created a variable named "a_variable_storing_a_function." I assigned a function to that variable that says it's a function.

*/ 

var a_object = {}

var a_variable_storing_a_function_to_go_into_an_object = function() {
    console.log("Yep. Still a function in here.")
}

a_object.a_function = a_variable_storing_a_function_to_go_into_an_object;

a_object.a_function();

/*

In this example, I made an empty object called "a_object." I then created another variable named "a_variable_storing_a_function_to_go_into_an_object" - wow that's long and would look awful in CamelCase. I digress. After we set up the object and the variable, the way we put something into an object is to assign it to a object property - in this case the property is called "a_function."

*/

var an_array = []
an_array.push(a_variable_storing_a_function, a_variable_storing_a_function_to_go_into_an_object);

console.log(an_array);

for (var i = 0; i < an_array.length; i++) {
    an_array[i]();
}

/* 

OK, last one!

Here I make an empty array and instead of writing more functions, I simply push the two functions I've written already into the array. Then I use a for loop to iterate over the array and one by one call the function!

*/ 

console.log("\n");
console.log("Step 4. Wasn't this article about callbacks?");
console.log("------------------")

/*

At this point I don't really know what a callback is. But what we do know is the anatomy of functions and that functions are first class citizens when it comes to the world of JavaScript. 

When you scour the internet for information on callbacks awesome and frightening computer science terms get thrown out like:

    - Closures
    - Functional Programming
    - Synchronous/Asynchronous
    - Blocking/Non-blocking
    - I/O
    - Deferreds
    - Event Handling
    - Threading

I don't think I'm going to cover all of those. 

At it's essence and what I think I've been getting at as we cover functions is that there's a difference between the _defining_ a function and _executing_ a function. Since functions are first class citizens, they can be passed around to various elements in JavaScript but the important thing to note is that when we pass in function as an argument - we're not executing anything! We're simply passing a definition of a function. By passing the definition, we can call the function to run later on when it's needed. 

*/ 

console.log("\n");
console.log("Step 5. Scope Basics");
console.log("------------------")

/* 

A very compelling notion of callbacks and JavaScript functions is the notion of variable scope. Let's break down scope a little and work our way to the creepy notion of closures. This is kind of critical when it comes to understanding - deeply - the notion of callbacks. 

Scope in JavaScript is kind of strange. There's a global scope. 

*/

var global_var = "Hi, I'm a global var."

function learning_about_global_scope() {
  console.log(global_var);
}

learning_about_global_scope();

/*

In the example above we defined a global variable called 'global_var' and then we defined a function called 'learning_about_global_scope.' In our function all we do is print out the global - we don't pass anything into the function because the function can see the global. 

What if we define a variable inside of a function, can we see it globally?

function more_learning_about_global_scope() {
    var here_is_a_var = "Hi, I'm inside a function";
}

console.log(here_is_a_var);

This example won't work. You'll get an error that says something to the effect of:

    ReferenceError: here_is_a_var is not defined

So what about an example that uses a callback. 

*/ 

function more_learning_about_scope(callback) {
    var here_is_a_var = "Hi, I'm inside a function";
    if (callback && typeof(callback) === "function" ) {
        callback(here_is_a_var);    
        console.log("Oh, yeah I can keep reaching out to the global scope!")
        callback(global_var);
    }
}

more_learning_about_scope(function(x) {
    console.log(x);
})

/* 

Here we retool the actual function that didn't work. We're trying to get at that variable inside of the function. We can access it with a CALLBACK! But you'll notice that when we invoke the function, we pass in some guessing variables named 'x' and yet our callback has access to the variables inside of the function!

Let's dissect scope just a little bit more so we're sure we really get it. 

*/

console.log("\n");
console.log("Step 6. Scope, Getting a Slight More Complicated");
console.log("------------------")

// This is the global scope all the way out here

var another_global_variable = "Hi. Just another global variable out here.";

function another_function_about_scope(some_argument, callback) {
    var another_inner_variable = "Hi. I'm a inner variable.";
    // This is an inner scope
    // This function has access to the outer global scope so it can access
    // the 'another_global_variable' variable and it also has access to
    // the inner scope so it has access to 'another_inner_variable'
    //
    // But now we're throwing a callback into the mix and that call back
    // has access to what kind of scope?
    if (callback && typeof(callback) === "function") {
        callback(another_global_variable, 
                 some_argument, 
                 another_inner_variable);
    }
}

another_function_about_scope("a string argument", function(global_var, arg, inner_var) {
  console.log(global_var);
  console.log(arg);
  console.log(inner_var);
});

/* 

In the example above we did some freaky stuff - I think. Basically we just demonstrated the a callback has access to all kinds of variables at both the global, inner and function call scope. Quite quite powerful, but not really useful if you're asking me. 

*/

console.log("\n");
console.log("Step 7. Closures");
console.log("------------------")

/* 

What we've been doing is playing with the notion of closures. When you have a function inside of a function, callback or not what you're doing is creating a closure. 

"A closure is inner function that has access to the outer (read: enclosing) functions variables - scope chain. 

*/


// function have_breakfast(food, drink, callback) {
//     console.log("Having a breakfast of " + food + ", " + drink + ".");
//     if (callback && typeof(callback) === "function") {
//         callback();
//     }
// }

// have_breakfast("coffe", "toast", function() {
//     console.log("Breakfast done, let's get to work!");
// })

/* 

Reference

## Advanced JavaScript
- http://ejohn.org/apps/learn/

## Variables and Scope
- http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/

## Understanding Functions
- http://googlecode.blogspot.com/2009/03/doug-crockford-javascript-good-parts.html
- http://amzn.com/0596517742

## Understanding Anonymous Functions
- http://stackoverflow.com/questions/1140089/how-does-an-anonymous-function-in-javascript-work

## Understanding Closures
- http://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1
- http://javascriptissexy.com/understand-javascript-closures-with-ease/
- https://teaching.cs.uml.edu/~heines/91.461/resources/SlideSharePresentations/JavaScriptPatterns-SelfInvocation.pdf

## Understanding Callbacks
- http://en.wikipedia.org/wiki/Callback_(computer_programming)
- http://books.google.com/books?id=KGt-FxUEj48C&lpg=PT83&ots=CDs3N_gjUh&dq=anatomy%20of%20a%20javascript%20callback&pg=PT84#v=onepage&q=anatomy%20of%20a%20javascript%20callback&f=false
- http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

## Understanding Async
- http://javascriptplayground.com/blog/2013/06/think-async/
- http://stackoverflow.com/questions/11233633/understanding-asynchronous-code-in-laymans-terms


*/
