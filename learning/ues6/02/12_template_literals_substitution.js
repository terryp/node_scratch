let name = 'Terry',
    message = `Hello ${name}`;

console.log(message);

let count = 10,
    price = 0.25,
    newMessage = `${count} items cost $${(count * price).toFixed(2)}.`;

console.log(newMessage);

let newName = 'Terry',
    newerMessage = `Hello, ${
        `my name is ${newName}`
    }.`;

console.log(newerMessage);
