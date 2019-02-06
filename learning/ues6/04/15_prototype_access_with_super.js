
let person = {
    getGreeting() {
        return "Hello!";
    }
};

let dog = {
    getGreeting() {
        return "Woof!";
    }
};

let friend = {
    getGreeting() {
        // ECMAScript 5 approach
        // 
        // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
        // 
        // Here's the ECMAScript 6 approach
        //
        return super.getGreeting() + ", hi!";
    }
};

Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) === person);

Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) === dog);
