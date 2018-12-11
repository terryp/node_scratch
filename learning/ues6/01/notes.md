
# Block Bindings

- In JavaScript where your variables are created *depends* on how you declare them. 

- In ECMAScript 6 there are new variable declarations:
    
    - var / The classic way to declar a variable in JavaScript. And also the most confusing. If not done correctly and if you're not thinking about hoisting. This can get you into trouble. 

    - let / Similar to var, but with the added benefit of lexical scoping. This means that you can use let to declare a variable but limit it's scope to the block in which is was defined. This is more similar to Python's way of handling scope. 
    
    - const / Aggressive scoping. Once set it's set. These are - duh - constants. But they have to be initialized with a value otherwise an error is going to get thrown. Also const has limited scope; similar to let, const declarations are block level. 

- Temporal Dead Zone (TDZ) / The place where variables go at runtime. JavaScript it going to look at all the code and either hoist variables into the the top of the function or the global scope (var) ... if it isn't either of those it goes into the TDZ (let and const). If you try to access something in the TDZ a run time error will be thrown. 

# Explain/Explore for Yourself

    - Scope
        - Global
        - Lexical
        - Local
        - Block

    - Blocks

    - Loops

    - Declaration
    
    - Initialization

    - Binding

    - IIFE / Immediately Invoked Function Expressions
