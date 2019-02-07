
# Destructuring 

- With objects use `{}`

- With arrays use `[]`

- If you try to destructure with two many things, variables that don't have a value will get an `undefined`

- You can alter variable names like this `original: localName`

- You can also set defaults like this `original: localName = true`

# Explain/Explore for Yourself

- Destructuring or unpacking?

- Why isn't this true?!

    ```
    let colors = ["red", "green", "blue"];
    let [...clonedColors] = colors;

    console.log(colors === clonedColors);
    ```