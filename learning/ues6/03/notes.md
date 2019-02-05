
# Function Parameters

- Functions in JavaScript are unique in that they allow any number of params to be passed regardless of the number of parameters declared in the function definition. 

# Default Function Parameters

- Defaults will only trigger if (1) No argument is placed or (2) the value of the argument placed is undefined. 

- If you pass a `null` value ... it won't trigger a default since `null` is valid.

# Rest Parameters

- Seems similar to args and kwargs in other languages. 

- There has to be three dots before a named parameter for this to work. So like: `...keys`

- A couple of rules apply here:
    - 1. Highlander / There can be only one. 
    - 2. Last But Not Least / It has to be the last parameter. 
    - 3. Setters / Can't be used as object literal setters. 

# Function Constructors

- Rest parameters can be embedded in function constructors the same as they are used in other functions.

# Spread Operator

- Allows you to pass in multiple elements into a function or operation. See the example. 

# Dual Purpose Functions

- There's (1) Call and (2) Construct. 

- If a function is called without `new` then the Call method is executed. If a function is called with `new` then the Construct method is executed. 

# Arrow Functions



# Explain/Explore for Yourself

- The merits of the ternary operator ... good, bar or indifferent ....
- The `===` operator ... is about strict equality for `type` and `value`.

- What is the TDZ / Temporal Dead Zone and how does it affect the nature of `let`, `const` and the concept of default values for parameters. 

- Minutiae of looping seems like a thing I should think about. 

    ```
    // 
    // The declaration of i and then the comma kind of screwed me up. 
    // 
    
    for(let i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }
    
    ```

- What's the difference between `arguments` and `rest parameters`? How do they work together and how are they independent?
